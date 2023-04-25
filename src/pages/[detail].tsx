import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AdDetailSmallSlider } from "@/components/adDetailComp/AdDetailSmallSlider";
import { Description } from "@/components/adDetailComp/Description";
import { log } from "console";

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
        console.log(res.data);
        console.log(1);
      })
      .catch((err) => {
        console.log(err);
        console.log(2);
      })
      .finally(() => {
        console.log(3);
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
      </div>
    );
  }
};

export default AdDetail;
