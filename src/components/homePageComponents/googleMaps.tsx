import React, { useEffect, useState } from "react";
import { BsListUl } from "react-icons/bs";
import { useLoadScript } from "@react-google-maps/api";
import { MapForHome } from "./Maps";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import Utils from "@/utils/Utils";
import Loading from "../loading/Loading";

export const Maps = ({ setSelected }: any): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [ads, setAds] = useState<Array<any>>([]);
  let currentQuery: any;
  const params = useSearchParams();

  useEffect(() => {
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    getData();
  }, [params]);

  function getData(): void {
    setLoading(true);
    axios
      .post(`${Utils.API_URL}/advertisementsformap`, { ...currentQuery })
      .then((res) => {
        setAds(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(ads);

  if (!isLoaded || loading) return <Loading />;
  return (
    <>
      <MapForHome data={ads} />
      <span
        className="flex items-center gap-2 bg-black p-2 rounded-xl text-white fixed bottom-20 z-30 border-2 border-slate-600 cursor-pointer"
        onClick={(): void => setSelected("Ads")}
      >
        Show list <BsListUl />
      </span>
    </>
  );
};
