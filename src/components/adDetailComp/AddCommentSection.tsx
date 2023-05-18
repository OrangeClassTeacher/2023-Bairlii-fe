import React, { useEffect, useState } from "react";


export const AddCommentSection = ({
  propertyId,
  setCommentBody,
  decoded,
  postComment,
  commentBody
}: any) => {


  function handleCommentBody(data: any) {
    setCommentBody({
      ...commentBody,
      propertyID: propertyId,
      userID: decoded?.user?._id,
      comment: [data],
    });
  }
  console.log(commentBody);


  return (
    <div>
      <form className="max-w-full shadow-lg bg-white rounded-lg border p-2 mx-auto my-10">
        <div className="px-3 mb-2 mt-2">
          <textarea
            placeholder="comment"
            className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            onChange={(e) => handleCommentBody(e.target.value)}
            value={commentBody?.comment[0]}
          ></textarea>
        </div>
        <div className="flex justify-end px-4" onClick={(e) => postComment(e)}>
          <input
            type="submit"
            className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
            value="Comment"
          />
        </div>
      </form>
    </div>
  );
};
