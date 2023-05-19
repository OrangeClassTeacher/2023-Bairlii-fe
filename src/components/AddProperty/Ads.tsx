import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";
import axios from "axios";
import { BsMap } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import Utils from "@/utils/Utils";

// interface ICurrentQuery {
//   category: string | undefined
// }

const Ads = ({ setSelected }: any): JSX.Element => {
  const [ads, setAds] = useState<Array<any>>([]);
  const pages = [];
  const [pageNumb, setPageNumb] = useState<number>(1);
  const [curPageNumb, setCurPageNumb] = useState<number>(1);
  const [reqBody, setReqBody] = useState<object>({ pageNumber: 1 });
  const [loading, setLoading] = useState<boolean>(false);
  const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const params = useSearchParams();
  let currentQuery: any;

  useEffect(() => {
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    getData();
  }, [curPageNumb, params]);

  function getData(): void {
    setLoading(true);
    axios
      .post(`${Utils.API_URL}/advertisements`, {
        ...reqBody,
        ...currentQuery,
      })
      .then((res) => {
        setAds(res.data.result.reverse());
        setPageNumb(Math.ceil(res.data.rowCount / 12));
        setLoading(false);
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

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-7 max-w-7xl w-full">
      {loading ? (
        <div className="flex flex-wrap gap-6 justify-center mt-7 max-w-7xl w-full">
          {skeletonArr.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap flex-col max-w-[25%] min-w-[300px]"
            >
              <div className="mx-auto bg-white rounded shadow-lg max-w-[25%] min-w-[300px] rounded-2xl">
                <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse" />
                <div className="p-3 h-">
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 bg-gray-200 rounded  animate-pulse" />
                    <div className="..." />
                    <div className="col-span-2 ..." />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-6 justife-between mt-7 max-w-7xl w-full">
            {ads?.map((item, index): JSX.Element => (
              <>
                <AdCard item={item} key={index} />
              </>
            ))}
          </div>
          <div className="flex gap-2 justify-center flex-wrap my-4 mb-16">
            {pages &&
              pages?.map((e, index) => {
                if (e > 0) {
                  if (e == curPageNumb) {
                    return (
                      <div
                        id={`${index}`}
                        onClick={(): void => {
                          setCurPageNumb(e);
                          setReqBody({ pageNumber: e });
                        }}
                        key={index}
                        className="border-2	border-black rounded-2xl w-10 text-center bg-slate-600 text-white cursor-pointer "
                      >
                        {e}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        id={`${index}`}
                        onClick={(): void => {
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
      )}
      <span
        className="flex items-center gap-2 bg-black p-2 rounded-xl text-white fixed bottom-24 z-30 border-2 border-slate-600 cursor-pointer"
        onClick={(): void => setSelected("Maps")}
      >
        Show map <BsMap />
      </span>
    </div>
  );
};

export default Ads;
