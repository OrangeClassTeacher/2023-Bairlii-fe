import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import jwt from "jsonwebtoken";

const RatingStars = ({ data }: any) => {
    const [rating, setRating] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [decoded, setDecoded] = useState<object | string>();

    console.log(rating);

    useEffect(() => {
        let localStorageValue: string = localStorage.getItem("token") || "";
        setDecoded(jwt.decode(localStorageValue) || "");
        getUserData();
    }, [data]);

    console.log(decoded);


    function getUserData() {
        axios
            .get(`http://localhost:9000/api/prorating/${data?.propertyID?._id}`)
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

    function updateRating(rating: number) {
        const reqBody = {
            propertyID: data?.propertyID?._id,
            rating: rating,
            userID: decoded?.user?._id
        }
        if (reqBody && decoded) {
            axios
                .put("http://localhost:9000/api/prorating", reqBody)
                .then((res) => {
                    console.log(res);
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

    if (loading) {
        return <div>Loading ...</div>;
    } else {
        return (
            <div>
                <div>
                    <div className="peer flex items-center">
                        Rating:{" "}
                        {rating?.status && rating?.rating[0] ? (
                            <div className="text-yellow-400">
                                {Math.floor(rating?.rating[0].avg_val) == 1 ? (
                                    <p className="flex">
                                        <AiFillStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </p>
                                ) : Math.floor(rating?.rating[0].avg_val) ==
                                    2 ? (
                                    <p className="flex">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </p>
                                ) : Math.floor(rating?.rating[0].avg_val) ==
                                    3 ? (
                                    <p className="flex">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </p>
                                ) : Math.floor(rating?.rating[0].avg_val) ==
                                    4 ? (
                                    <p className="flex">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                    </p>
                                ) : (
                                    <p className="flex">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </p>
                                )}
                            </div>
                        ) : (
                            <div className="flex">No Rating</div>
                        )}
                    </div>
                    <div className="peer flex items-center">
                        Rating count: {rating?.ratingCount}
                    </div>
                    <div className="hidden peer-hover:flex hover:flex w-[90px] flex-col bg-white drop-shadow-lg  text-yellow-400 items-center justify-center p-2 rounded-xl">
                        <p className="flex hover:text-yellow-600" onClick={() => updateRating(1)}>
                            <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600" onClick={() => updateRating(2)}>
                            <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600" onClick={() => updateRating(3)}>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600" onClick={() => updateRating(4)}>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600" onClick={() => updateRating(5)}>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default RatingStars;