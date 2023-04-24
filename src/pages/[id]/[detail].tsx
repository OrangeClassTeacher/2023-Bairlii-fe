import React from "react";
import { useRouter } from "next/router";
import { AdDetailSmallSlider } from "@/components/adDetailComp/adDetailSmallSlider";
import axios from "axios";

const AdDetail = () => {
  const { query } = useRouter();

  function getData() {
    axios
      .get("http://localhost:9000/api/advertisement")
      .then((res) => {
        setAds(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div>{query.id}</div>
      <div>{query.detail}</div>
      <AdDetailSmallSlider images={} />
    </div>
  );
};

export default AdDetail;
