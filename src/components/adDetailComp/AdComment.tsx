import axios from "axios";
import React, { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";

export const AdComment = ({ data }: any) => {
  console.log(data);
  const [commentData, setCommentData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentData(data?.propertyID?._id);
  }, [data]);

  function getCommentData(id: any) {
    if (id) {
      console.log("aaa");
      axios
        .get(`http://localhost:9000/api/procomments/${id}`)
        .then((res) => {
          setCommentData(res.data.result)
          console.log(res.data.result)
        })
        .catch((err) => {
          console.log(err)
        }).finally(() => {
          setLoading(false)
        });
    }
  }

  console.log(commentData);


  if (loading) {
    return <CommentCard />
  } else {
    return (<div className="mt-8" >
      {commentData?.map((e): any => {
        return (
          <div >
            <CommentCard data={e} />
          </div>)
      })}
    </div>)
  };
}
