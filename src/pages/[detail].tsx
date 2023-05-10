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
        console.log(res.data.result);

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return <div>Loading</div>;

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
