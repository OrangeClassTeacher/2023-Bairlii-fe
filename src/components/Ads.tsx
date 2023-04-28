import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";
import axios from "axios";

const Ads = (): JSX.Element => {
  const [ads, setAds] = useState<Array<any>>([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("http://localhost:9000/api/advertisement")
      .then((res) => {
        setAds(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex flex-wrap gap-6">
      {ads.map((item, index): any => {
        return (
          <>
            <AdCard key={index} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Ads;
