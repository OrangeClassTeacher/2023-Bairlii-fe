import React, { useEffect, useState } from 'react'
import { BsListUl } from 'react-icons/bs'
import { useLoadScript } from "@react-google-maps/api";
import { MapForHome } from "./Maps";
import axios from 'axios';

export const Maps = ({ setSelected }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [ads, setAds] = useState<Array<any>>([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setLoading(true);
    axios
      .get("http://localhost:9000/api/advertisements")
      .then((res) => {
        setAds(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(isLoaded);
  console.log(ads);
  console.log(loading);

  if (!isLoaded || !ads || loading) return <div>Loading ... </div>;
  return (
    <>
      <MapForHome data={ads} />
      <span className="flex items-center gap-2 bg-black p-2 rounded-xl text-white fixed bottom-20 z-30 border-2 border-slate-600 cursor-pointer" onClick={() => setSelected("Ads")}>
        Show list <BsListUl />
      </span>
    </>
  )
}
