import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AdDetailSmallSlider } from "@/components/adDetailComp/AdDetailSmallSlider";
import { Description } from "@/components/adDetailComp/Description";
import { GoogleMapComp } from "@/components/adDetailComp/GoogleMap";

const AdDetail = () => {
  const route = useRouter();
  const id = route.query.detail;

  const [adData, setAdData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdData();
  }, [id]);

  function getAdData() {
    console.log(id);

    axios
      .get(`http://localhost:9000/api/advertisement/${id}`)
      .then((res) => {
        setAdData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <AdDetailSmallSlider images={adData} />
        <Description data={adData} />
        <GoogleMapComp data={adData} />
      </div>
    );
  }
};

export default AdDetail;
