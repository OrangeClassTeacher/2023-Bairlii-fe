import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";
import axios from "axios";

const Ads = (): JSX.Element => {
  const [ads, setAds] = useState<Array<any>>([]);
  let pages = [];
  const [pageNumb, setPageNumb] = useState<number>(1);
  const [curPageNumb, setCurPageNumb] = useState<number>(1);
  const [reqBody, setReqBody] = useState<object>({ pageNumber: 1 });
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getData();
  }, [curPageNumb]);

  function getData() {
    axios
      .post("http://localhost:9000/api/advertisements", reqBody)
      .then((res) => {
        setAds(res.data.result);
        setPageNumb(Math.ceil(res.data.rowCount / 9));
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (pageNumb) {
    for (
      let i: number = curPageNumb - 10;
      i <= curPageNumb + 9 && i <= pageNumb;
      i++
    ) {
      pages.push(i);
    }
  }

  console.log(pageNumb);

  if (loading) {
    return (
      <div className="flex flex-wrap gap-6 justify-center mt-7 max-w-5xl w-full">
        <div className="mx-auto bg-white rounded shadow-lg max-w-[25%] min-w-[300px] rounded-2xl">
          <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
          </div>
          <div className="p-3 h-">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded  animate-pulse">
              </div>
              <div className="...">
              </div>
              <div className="col-span-2 ...">
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-white rounded shadow-lg max-w-[25%] min-w-[300px] rounded-2xl">
          <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
          </div>
          <div className="p-3 h-">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded  animate-pulse">
              </div>
              <div className="...">
              </div>
              <div className="col-span-2 ...">
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-white rounded shadow-lg max-w-[25%] min-w-[300px] rounded-2xl">
          <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
          </div>
          <div className="p-3 h-">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
              </div>
              <div className="h-8 bg-gray-200 rounded  animate-pulse">
              </div>
              <div className="...">
              </div>
              <div className="col-span-2 ...">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center mt-7 max-w-5xl w-full">
        {ads.map((item, index): any => {
          return (
            <>
              <AdCard item={item} />
            </>
          );
        })}
      </div>
      <div className="flex gap-2 justify-center flex-wrap my-4">
        {pages &&
          pages?.map((e, index) => {
            if (e > 0) {
              if (e === curPageNumb) {
                return (
                  <div
                    id={`${index}`}
                    onClick={() => {
                      setCurPageNumb(e);
                      setReqBody({ pageNumber: e });
                    }}
                    key={index}
                    className="border-2	border-black rounded-2xl w-10 text-center bg-slate-600 text-white cursor-pointer"
                  >
                    {e}
                  </div>
                );
              } else {
                return (
                  <div
                    id={`${index}`}
                    onClick={() => {
                      setCurPageNumb(e);
                      setReqBody({ pageNumber: e });
                    }}
                    key={index}
                    className="border-2	border-black rounded-2xl w-10 text-center cursor-pointer"
                  >
                    {e}
                  </div>
                );
              }
            }
          })}
      </div>
    </div>
  );
};

export default Ads;
