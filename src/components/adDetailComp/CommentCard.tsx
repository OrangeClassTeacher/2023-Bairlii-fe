import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const CommentCard = ({ data }: any): JSX.Element => {
  const date = new Date(data?.createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const [commentedUser, setCommentedUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData(): void {
    axios
      .get(`http://localhost:9000/api/user/${data?.userID}`)
      .then((res) => {
        setCommentedUser(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <div>
        <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse dark:bg-gray-900">
          <div className="flex p-4 space-x-4 sm:px-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700" />
            <div className="flex-1 py-2 space-y-4">
              <div className="w-full h-3 rounded dark:bg-gray-700" />
              <div className="w-5/6 h-3 rounded dark:bg-gray-700" />
            </div>
          </div>
          <div className="p-4 space-y-4 sm:px-8">
            <div className="w-full h-4 rounded dark:bg-gray-700" />
            <div className="w-full h-4 rounded dark:bg-gray-700" />
            <div className="w-3/4 h-4 rounded dark:bg-gray-700" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center relative w-full">
        <div className="relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg w-full">
          <div className="relative flex gap-4">
            <Image
              src={`${commentedUser?.profilePicture}`}
              className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
              width={500}
              height={500}
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  {commentedUser?.firstName}{" "}
                  {commentedUser?.lastName}
                </p>
                <a className="text-gray-500 text-xl" href="#">
                  <i className="fa-solid fa-trash" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">{date}</p>
            </div>
          </div>
          <p className="-mt-4 text-gray-500">{data?.comment[0]}</p>
        </div>
      </div>
    );
  }
};
