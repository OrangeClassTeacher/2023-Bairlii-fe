import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Description } from "@/components/adDetailComp/Description";
import { AdComment } from "@/components/adDetailComp/AdComment";
import LandlordInfo from "@/components/adDetailComp/LandlordInfo";
import SwiperForDetail from "@/components/adDetailComp/SwiperForDetail";
import RatingStars from "@/components/adDetailComp/star";
import { log } from "console";

const AdDetail = () => {
  const route = useRouter();
  const id = route.query.detail;
  const [adData, setAdData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdData();
  }, [id]);

  function getAdData() {
    axios
      .get(`http://localhost:9000/api/advertisement/${id}`)
      .then((res) => {
        setAdData(res.data.result);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading)
    return (
      <div className="flex justify-center h-full pt-52">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );

  return (
    <div className="max-w-5xl w-full mt-7 mx-auto">
      <SwiperForDetail data={adData} />
      <Description data={adData} />
      <RatingStars data={adData} />
      <AdComment data={adData} />
      <LandlordInfo data={adData} />
    </div>
  );
};

export default AdDetail;
