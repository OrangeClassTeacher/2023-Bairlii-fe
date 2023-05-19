import AdCardForUser from "@/components/AddProperty/AdCardForUser";
import Utils from "@/utils/Utils";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function UserAdvertisements(): JSX.Element {
  const route = useRouter();
  const userID = route.query.userId;
  const [loading, setLoading] = useState<boolean>(false);
  const [ads, setAds] = useState<Array<any>>([]);
  const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    getData();
  }, [userID]);

  function getData(): void {
    setLoading(true);
    axios
      .get(`${Utils.API_URL}/advertisements/${userID}`)
      .then((res) => {
        setAds(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function deleteAdvertisement(id: string): void {
    axios
      .delete(`${Utils.API_URL}/advertisement/${id}`)
      .then((res) => {
        if (res.data.status) {
          alert("amjilttai ustgalaa");
          getData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex justify-center">
      {loading ? (
        <div className="flex flex-wrap gap-6 justify-center mt-7 max-w-7xl w-full">
          {skeletonArr.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap flex-col max-w-[25%] min-w-[300px]"
              >
                <div className="mx-auto bg-white rounded shadow-lg max-w-[25%] min-w-[300px] rounded-2xl">
                  <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"></div>
                  <div className="p-3 h-">
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
                      <div className="..."></div>
                      <div className="col-span-2 ..."></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap gap-6  mt-7 max-w-7xl w-full mb-20">
          {ads?.map((item, index): JSX.Element => {
            return (
              <>
                <AdCardForUser
                  item={item}
                  key={index}
                  deleteAdvertisement={deleteAdvertisement}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserAdvertisements;
