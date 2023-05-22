import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import jwt from "jsonwebtoken";
import Utils from "@/utils/Utils";
import Loading from "../loading/Loading";

const RatingStars = ({ data }: any): JSX.Element => {
  const [rating, setRating] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [decoded, setDecoded] = useState<any>();

  useEffect(() => {
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    getUserData();
  }, [data]);

  function getUserData(): void {
    axios
      .get(`${Utils.API_URL}/prorating/${data?.propertyID?._id}`)
      .then((res) => {
        setRating(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateRating(rating: number): void {
    const reqBody = {
      propertyID: data?.propertyID?._id,
      rating: rating,
      userID: decoded?.user?._id
    }
    if (decoded) {
      axios
        .put(`${Utils.API_URL}/prorating`, reqBody)
        .then(() => {
          getUserData()
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      alert("For giving rate you need to sign in")
      window.location.href = "/login"
    }
  }
  console.log(Math.floor(rating?.rating[0]?.avg_val) == 4);



  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="ratingBox flex gap-6">
        <div className="peer flex items-center text-3xl">
          Rating count: {rating?.ratingCount}
        </div>
        {rating?.status && rating?.rating[0] ? (
          <div className="rating">
            {Math.floor(rating?.rating[0].avg_val) == 5 ? (<input value="star-1" name="star-radio" id="star-1" type="radio" className="hidden" checked />) : (<input value="star-1" name="star-radio" id="star-1" type="radio" className="hidden" />)}
            <label htmlFor="star-1" onClick={(): void => updateRating(5)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 4 ? (<input value="star-1" name="star-radio" id="star-2" type="radio" className="hidden" checked />) : (<input value="star-1" name="star-radio" id="star-2" type="radio" className="hidden" />)}
            <label htmlFor="star-2" onClick={(): void => updateRating(4)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 3 ? (<input value="star-1" name="star-radio" id="star-3" type="radio" className="hidden" checked />) : (<input value="star-1" name="star-radio" id="star-3" type="radio" className="hidden" />)}
            <label htmlFor="star-3" onClick={(): void => updateRating(3)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 2 ? (<input value="star-1" name="star-radio" id="star-4" type="radio" className="hidden" checked />) : (<input value="star-1" name="star-radio" id="star-4" type="radio" className="hidden" />)}
            <label htmlFor="star-4" onClick={(): void => updateRating(2)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 1 ? (<input value="star-1" name="star-radio" id="star-5" type="radio" className="hidden" checked />) : (<input value="star-1" name="star-radio" id="star-5" type="radio" className="hidden" />)}
            <label htmlFor="star-5" onClick={(): void => updateRating(1)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
          </div>
        ) : (
          <div className="rating">
            <label htmlFor="star-1" onClick={(): void => updateRating(5)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            <label htmlFor="star-2" onClick={(): void => updateRating(4)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            <label htmlFor="star-3" onClick={(): void => updateRating(3)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            <label htmlFor="star-4" onClick={(): void => updateRating(2)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
            <label htmlFor="star-5" onClick={(): void => updateRating(1)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
            </label>
          </div>
        )}
        {/* <div className="rating">
          <input value="star-1" name="star-radio" id="star-1" type="radio" className="hidden" />
          <label htmlFor="star-1" onClick={(): void => updateRating(5)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-2" type="radio" className="hidden" />
          <label htmlFor="star-2" onClick={(): void => updateRating(4)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-3" type="radio" className="hidden" />
          <label htmlFor="star-3" onClick={(): void => updateRating(3)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-4" type="radio" className="hidden" />
          <label htmlFor="star-4" onClick={(): void => updateRating(2)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-5" type="radio" className="hidden" />
          <label htmlFor="star-5" onClick={(): void => updateRating(1)}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
        </div> */}
      </div>

      // <div>
      //   <div>
      //     <div className="peer flex items-center">
      //       Rating:{" "}
      //       {rating?.status && rating?.rating[0] ? (
      //         <div className="text-yellow-400">
      //           {Math.floor(rating?.rating[0].avg_val) == 1 ? (
      //             <p className="flex">
      //               <AiFillStar />
      //               <AiOutlineStar />
      //               <AiOutlineStar />
      //               <AiOutlineStar />
      //               <AiOutlineStar />
      //             </p>
      //           ) : Math.floor(rating?.rating[0].avg_val) == 2 ? (
      //             <p className="flex">
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiOutlineStar />
      //               <AiOutlineStar />
      //               <AiOutlineStar />
      //             </p>
      //           ) : Math.floor(rating?.rating[0].avg_val) == 3 ? (
      //             <p className="flex">
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiOutlineStar />
      //               <AiOutlineStar />
      //             </p>
      //           ) : Math.floor(rating?.rating[0].avg_val) == 4 ? (
      //             <p className="flex">
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiOutlineStar />
      //             </p>
      //           ) : (
      //             <p className="flex">
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiFillStar />
      //               <AiFillStar />
      //             </p>
      //           )}
      //         </div>
      //       ) : (
      //         <div className="flex">No Rating</div>
      //       )}
      //     </div>
      //     <div className="peer flex items-center">
      //       Rating count: {rating?.ratingCount}
      //     </div>
      //     <div className="hidden peer-hover:flex hover:flex w-[90px] flex-col bg-white drop-shadow-lg  text-yellow-400 items-center justify-center p-2 rounded-xl">

      //       {/* <p
      //         className="flex hover:text-yellow-600"
      //         onClick={(): void => updateRating(1)}
      //       >
      //         <AiFillStar />
      //         <AiOutlineStar />
      //         <AiOutlineStar />
      //         <AiOutlineStar />
      //         <AiOutlineStar />
      //       </p>
      //       <p
      //         className="flex hover:text-yellow-600"
      //         onClick={(): void => updateRating(2)}
      //       >
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiOutlineStar />
      //         <AiOutlineStar />
      //         <AiOutlineStar />
      //       </p>
      //       <p
      //         className="flex hover:text-yellow-600"
      //         onClick={(): void => updateRating(3)}
      //       >
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiOutlineStar />
      //         <AiOutlineStar />
      //       </p>
      //       <p
      //         className="flex hover:text-yellow-600"
      //         onClick={(): void => updateRating(4)}
      //       >
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiOutlineStar />
      //       </p>
      //       <p
      //         className="flex hover:text-yellow-600"
      //         onClick={(): void => updateRating(5)}
      //       >
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiFillStar />
      //         <AiFillStar />
      //       </p> */}
      //     </div>
      //   </div>
      // </div>
    );
  }
};

export default RatingStars;
