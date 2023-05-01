import axios from "axios";
import React, { useEffect, useState } from "react";

export const AdComment = ({ data }: any) => {
  console.log(data);
  const [commentData, setCommentData] = useState<Array<any>>([]);

  useEffect(() => {
    getCommentData(data);
  }, [data]);

  function getCommentData(data: any) {
    console.log("fdsa");
    console.log(data?.propertyID?._id);

    if (data) {
      axios
        .get(`http://localhost:9000/api/procomments/${data?.propertyID?._id}`)
        .then((res) => {
          setCommentData(res.data.result);
          console.log(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return <div>test</div>;
};
