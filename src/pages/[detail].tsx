import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Description } from "@/components/adDetailComp/Description";
import { AdComment } from "@/components/adDetailComp/AdComment";
import LandlordInfo from "@/components/adDetailComp/LandlordInfo";
import SwiperForDetail from "@/components/adDetailComp/SwiperForDetail";
import RatingStars from "@/components/adDetailComp/star";
import Utils from "@/utils/Utils";
import Loading from "@/components/loading/Loading";

const AdDetail = (): JSX.Element => {
  const route = useRouter();
  const id = route.query.detail;
  const [adData, setAdData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdData();
  }, [id]);

  function getAdData(): void {
    axios
      .get(`${Utils.API_URL}/advertisement/${id}`)
      .then((res) => {
        setAdData(res.data.result);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return <Loading />;

  return (
    <div className="max-w-5xl w-full mt-7 mx-auto mb-32 md:h-[100px]">
      <SwiperForDetail data={adData} />
      <div className="xl:flex lg:flex  md:justify-between  mt-10 ">
        <div className="  md:flex md:flex-wrap md:justify-center sm:flex sm:flex-wrap sm:justify-center ">
          <div className="sm:flex sm:flex-wrap md:flex   md:w-[500px]">
            <div className=" md:w-[500px] sm:w-[400px]   ">
              <Description data={adData} />
            </div>
            <div className=" mb-12 md:w-[500px] flex justify-center ">
              <RatingStars data={adData} />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex   xl:w-[500px] lg:w-[500px] sm:w-[470px] md:w-[350px]">
            <AdComment data={adData} />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <LandlordInfo data={adData} />
      </div>
    </div>
  );
};

export default AdDetail;
