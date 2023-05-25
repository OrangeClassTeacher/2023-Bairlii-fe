import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Utils from "@/utils/Utils";
import Loading from "../loading/Loading";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RatingStars = ({ data }: any): JSX.Element => {
  const [rating, setRating] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [decoded, setDecoded] = useState<any>();
  const route = useRouter();

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
      userID: decoded?.user?._id,
    };
    if (decoded) {
      axios
        .put(`${Utils.API_URL}/prorating`, reqBody)
        .then(() => {
          getUserData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      route.push("/login", undefined, { shallow: false });
      toast.warning("For giving rate you need to sign in", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  console.log(Math.floor(rating?.rating[0]?.avg_val) == 4);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="ratingBox flex gap-6 ps-12 mt-14">
        <div className="peer flex items-center text-3xl">
          <p className="">Rating:</p>
          <p className="">{rating?.ratingCount}</p>
        </div>
        {rating?.status && rating?.rating[0] ? (
          <div className="rating">
            {Math.floor(rating?.rating[0].avg_val) == 5 ? (
              <input
                value="star-1"
                name="star-radio"
                id="star-1"
                type="radio"
                className="hidden"
                checked
              />
            ) : (
              <input
                value="star-1"
                name="star-radio"
                id="star-1"
                type="radio"
                className="hidden"
              />
            )}
            <label htmlFor="star-1" onClick={(): void => updateRating(5)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 4 ? (
              <input
                value="star-1"
                name="star-radio"
                id="star-2"
                type="radio"
                className="hidden"
                checked
              />
            ) : (
              <input
                value="star-1"
                name="star-radio"
                id="star-2"
                type="radio"
                className="hidden"
              />
            )}
            <label htmlFor="star-2" onClick={(): void => updateRating(4)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 3 ? (
              <input
                value="star-1"
                name="star-radio"
                id="star-3"
                type="radio"
                className="hidden"
                checked
              />
            ) : (
              <input
                value="star-1"
                name="star-radio"
                id="star-3"
                type="radio"
                className="hidden"
              />
            )}
            <label htmlFor="star-3" onClick={(): void => updateRating(3)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 2 ? (
              <input
                value="star-1"
                name="star-radio"
                id="star-4"
                type="radio"
                className="hidden"
                checked
              />
            ) : (
              <input
                value="star-1"
                name="star-radio"
                id="star-4"
                type="radio"
                className="hidden"
              />
            )}
            <label htmlFor="star-4" onClick={(): void => updateRating(2)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            {Math.floor(rating?.rating[0].avg_val) == 1 ? (
              <input
                value="star-1"
                name="star-radio"
                id="star-5"
                type="radio"
                className="hidden"
                checked
              />
            ) : (
              <input
                value="star-1"
                name="star-radio"
                id="star-5"
                type="radio"
                className="hidden"
              />
            )}
            <label htmlFor="star-5" onClick={(): void => updateRating(1)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
          </div>
        ) : (
          <div className="rating w-[280px]">
            <label htmlFor="star-1" onClick={(): void => updateRating(5)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            <label htmlFor="star-2" onClick={(): void => updateRating(4)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            <label htmlFor="star-3" onClick={(): void => updateRating(3)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            <label htmlFor="star-4" onClick={(): void => updateRating(2)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
            <label htmlFor="star-5" onClick={(): void => updateRating(1)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  pathLength="360"
                />
              </svg>
            </label>
          </div>
        )}
      </div>
    );
  }
};

export default RatingStars;
