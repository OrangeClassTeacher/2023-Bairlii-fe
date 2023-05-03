import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { AddCommentSection } from "./AddCommentSection";
import jwt from "jsonwebtoken";

export const AdComment = ({ data }: any) => {
  const [commentData, setCommentData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [decoded, setDecoded] = useState<object | string>();
  const [commentBody, setCommentBody] = useState<object>({
    propertyID: "",
    userID: "",
    comment: [],
  });
  const [token, setToken] = useState<string>();


  useEffect(() => {
    getCommentData(data?.propertyID?._id);
  }, [data]);

  function getCommentData(id: any) {
    if (id) {
      console.log("aaa");
      axios
        .get(`http://localhost:9000/api/procomments/${id}`)
        .then((res) => {
          setCommentData(res.data.result);
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
    axios
      .post("http://localhost:9000/api/procomment", commentBody, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        console.log(res);
        commentBody.comment[0] = "";
        getCommentData(data?.propertyID?._id)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (loading) {
    return (
      <AddCommentSection
        propertyId={data?.propertyID?._id}
        setCommentBody={setCommentBody}
        decoded={decoded}
        postComment={postComment}
        commentBody={commentBody}
      />
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
