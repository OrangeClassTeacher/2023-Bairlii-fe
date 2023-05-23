import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { AddCommentSection } from "./AddCommentSection";
import jwt from "jsonwebtoken";
import Utils from "@/utils/Utils";
import { toast } from "react-toastify";

interface iComment {
  propertyID: string;
  userID: string;
  comment: string[] | undefined[];
}

export const AdComment = ({ data }: any): JSX.Element => {
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
  };

  useEffect(() => {
    getCommentData(data?.propertyID?._id);
  }, [data]);

  function getCommentData(id: any): void {
    if (id) {
      axios
        .get(`${Utils.API_URL}/procomments/${id}`)
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
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    if (localStorageValue.length > 1) {
      setToken(localStorageValue);
    }
  }, []);

  function postComment(e: any): void {
    e.preventDefault();
    if (commentBody.comment[0]) {
      axios
        .post(`${Utils.API_URL}/procomment`, commentBody, {
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
      toast.warning(" Please write a comment", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
        {commentData.map((e, index): any => (
          <div key={index}>
            <CommentCard data={e} />
          </div>
        ))}
      </div>
    );
  }
};
