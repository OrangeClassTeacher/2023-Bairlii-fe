import React, { useEffect, useState } from "react";
import AdCard from "./AdCard";
import axios from "axios";
import { BsMap } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import Utils from "@/utils/Utils";
import Loading from "../loading/Loading";

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
        setAds(res.data.result);
        setPageNumb(Math.ceil(res.data.rowCount[0].rowCount / 12));
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
    <div className="flex flex-wrap gap-6 justify-center mt-7 max-w-7xl w-full mb-32 xl:mb-0 lg:mb-0 ">
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div>
          <div className="flex flex-wrap gap-6 justife-between mt-7 max-w-7xl w-full lg:justify-center md:justify-center sm:justify-center  justify-center">
            {ads.map(
              (item, index): JSX.Element => (
                <>
                  <AdCard item={item} key={index} />
                </>
              )
            )}
          </div>
          <div className="flex gap-2 justify-center sm:justify-center flex-wrap my-4 mb-16">
            {pages.map((e, index) => {
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
        className="flex items-center gap-2 bg-black p-2 rounded-xl text-white fixed bottom-32 xl:bottom-27 z-30 border-2 border-slate-600 cursor-pointer"
        onClick={(): void => setSelected("Maps")}
      >
        Show map <BsMap />
      </span>
    </div>
  );
};

export default Ads;
