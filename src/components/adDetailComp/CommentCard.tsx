import axios from "axios";
import React, { useState, useEffect } from "react";

export const CommentCard = ({ data }: any) => {
  console.log(data);
  const date = new Date(data?.createdAt).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
  const [commentedUser, setCommentedUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData()
  }, [])

  function getUserData() {
    axios
      .get(`http://localhost:9000/api/user/${data?.userID}`)
      .then((res) => {
        setCommentedUser(res.data.result);
        console.log(res.data.result)
      })
      .catch((err) => { console.log(err) })
      .finally(() => { setLoading(false) });
  }


  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    )
  } else {
    return (
      <div className="flex justify-center relative w-full ">
        <div className="relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg w-full">
          <div className="relative flex gap-4">
            <img
              src={`${commentedUser?.profilePicture}`}
              className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  {commentedUser?.firstName} {commentedUser?.lastName}
                </p>
                <a className="text-gray-500 text-xl" href="#">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
              <p className="text-gray-400 text-sm">{date}</p>
            </div>
          </div>
          <p className="-mt-4 text-gray-500">
            {data?.comment[0]}
          </p>
        </div>
      </div>
    );
  }
};
