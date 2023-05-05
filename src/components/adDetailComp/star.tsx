import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingStars = ({ data }: any) => {
    const [rating, setRating] = useState<any>();
    const [loading, setLoading] = useState(true);

    console.log(rating);

    useEffect(() => {
        getUserData();
    }, [data]);

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
                    <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg  text-yellow-400">
                        <p className="flex hover:text-yellow-600">
                            <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600">
                            <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600">
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600">
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                        </p>
                        <p className="flex hover:text-yellow-600">
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default RatingStars;
