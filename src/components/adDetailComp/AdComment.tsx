import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { AddCommentSection } from "./AddCommentSection";
import jwt from "jsonwebtoken";

interface iComment {
  propertyID: string,
  userID: string,
  comment: string[] | undefined[],
}

export const AdComment = ({ data }: any) => {
  const [commentData, setCommentData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [decoded, setDecoded] = useState<object | string>();
  const [commentBody, setCommentBody] = useState<iComment>({
    propertyID: "",
    userID: "",
    comment: [],
  });
  const [token, setToken] = useState<string>();
  const commentBodyInit = {
    propertyID: "",
    userID: "",
    comment: [""],
  }

  useEffect(() => {
    getCommentData(data?.propertyID?._id);
  }, [data]);

  function getCommentData(id: any) {
    if (id) {
      axios
        .get(`http://localhost:9000/api/procomments/${id}`)
        .then((res) => {
          setCommentData(res.data.result.reverse());
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    let localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    if (localStorageValue.length > 1) {
      setToken(localStorageValue);
    }
  }, []);

  function postComment(e: any) {
    e.preventDefault();
    if (commentBody?.comment[0]) {
      axios
        .post("http://localhost:9000/api/procomment", commentBody, {
          headers: {
            "x-access-token": token,
          },
        })
        .then((res) => {
          console.log(res);
          setCommentBody(commentBodyInit);
          getCommentData(data?.propertyID?._id);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Write comment");
    }
  }

  if (loading) {
    return (
      <>
        <AddCommentSection
          propertyId={data?.propertyID?._id}
          setCommentBody={setCommentBody}
          decoded={decoded}
          postComment={postComment}
          commentBody={commentBody}
        />
        <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse dark:bg-gray-900">
          <div className="flex p-4 space-x-4 sm:px-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
            <div className="flex-1 py-2 space-y-4">
              <div className="w-full h-3 rounded dark:bg-gray-700"></div>
              <div className="w-5/6 h-3 rounded dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="p-4 space-y-4 sm:px-8">
            <div className="w-full h-4 rounded dark:bg-gray-700"></div>
            <div className="w-full h-4 rounded dark:bg-gray-700"></div>
            <div className="w-3/4 h-4 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <AddCommentSection
          propertyId={data?.propertyID?._id}
          setCommentBody={setCommentBody}
          decoded={decoded}
          postComment={postComment}
          commentBody={commentBody}
        />
        {commentData?.map((e, index): any => {
          return (
            <div key={index}>
              <CommentCard data={e} />
            </div>
          );
        })}
      </div>
    );
  }
};
