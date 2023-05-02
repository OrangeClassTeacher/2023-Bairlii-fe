import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";
import { AddCommentSection } from "./AddCommentSection";

export const AdComment = ({ data }: any) => {
  const [commentData, setCommentData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState(true);

  useEffect(() => {
    getCommentData(data?.propertyID?._id);
  }, [data, newComment]);

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

  if (loading) {
    return (
      <AddCommentSection
        propertyId={data?.propertyID?._id}
        setNewComment={setNewComment}
        newComment={newComment}
      />
    );
  } else {
    return (
      <div>
        <AddCommentSection
          propertyId={data?.propertyID?._id}
          setNewComment={setNewComment}
          newComment={newComment}
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
