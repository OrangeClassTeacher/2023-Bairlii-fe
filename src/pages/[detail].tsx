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
    <div className="max-w-5xl w-full mt-7 mx-auto mb-32">
      <SwiperForDetail data={adData} />
      <Description data={adData} />
      <RatingStars data={adData} />
      <AdComment data={adData} />
      <LandlordInfo data={adData} />
    </div>
  );
};

export default AdDetail;
