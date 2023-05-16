import React, { useEffect, useState } from "react";
import Link from "next/link";
import AddAdvertisement from "./AddAdvertisement";
import axios from "axios";

const UserPropertyCard = ({ propertyData, deleteProperties }: any) => {
    const [addingAdvertisement, setAddingAdvertisement] =
        useState<boolean>(false);
    const [advertisementId, setAdvertisementId] = useState<string>("");
    const {
        _id,
        photos,
        guestCount,
        roomCount,
        bathroomCount,
        area,
        description,
        locationName,
    } = propertyData;

    useEffect(() => {
        checkActiveAdvertisement();
    }, []);

    function checkActiveAdvertisement() {
        axios
            .get(`http://localhost:9000/api/advertisement/check/${_id}`)
            .then((res) => {
                console.log(res.data.result[0].propertyID);
                setAdvertisementId(res.data.result[0].propertyID);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    if (addingAdvertisement) {
        return (
            <AddAdvertisement
                setAddingAdvertisement={setAddingAdvertisement}
                _id={_id}
                setAdvertisementId={setAdvertisementId}
            />
        );
    }
    return (
        <div className="w-60 p-2 rounded-xl bg-gray-200">
            <div>
                <img
                    className="rounded-xl h-40 w-60 object-cover"
                    src={photos[0]}
                    alt=""
                />
            </div>
            <div className="pt-4">
                <div className=" flex bg-yellow-200 justify-between p-2 rounded-3xl ">
                    <p className="bg-yellow-300 rounded-xl ps-2 pr-2 font-bold">
                        Хүний тоо
                    </p>
                    <p className="rounded-xl bg-yellow-400 pr-2 ps-2">
                        {guestCount}
                    </p>
                </div>
                <div className="pt-2">
                    <p className="flex bg-lime-200 justify-between p-2 rounded-3xl ">
                        <p className="bg-lime-300 rounded-xl ps-2 pr-2 font-bold">
                            Өрөөний тоо
                        </p>
                        <p className="rounded-xl bg-lime-400 pr-2 ps-2">
                            {roomCount}
                        </p>
                    </p>
                </div>
                <div className="pt-2">
                    <p className="flex bg-green-200 justify-between p-2 rounded-3xl ">
                        <p className="bg-green-300 rounded-xl ps-2 pr-2 font-bold">
                            Угаалгын өрөө
                        </p>
                        <p className="bg-green-400 rounded-xl pr-2 ps-2">
                            {bathroomCount}
                        </p>
                    </p>
                </div>
                <div className="pt-2">
                    <p className="flex bg-teal-200 justify-between p-2 rounded-3xl">
                        <p className="bg-teal-300 rounded-xl ps-2 pr-2 font-bold">
                            Талбай
                        </p>
                        <p className="bg-teal-400 rounded-xl pr-2 ps-2">
                            {area + "м.кв"}
                        </p>
                    </p>
                </div>
            </div>
            <div className="pt-2 w-50">
                <p className="ps-2 pr-2 bg-slate-300 rounded-2xl">
                    {description}
                </p>
            </div>
            <div>{locationName}</div>
            <div className="flex justify-between ps-2 pe-2 pt-3">
                <Link
                    href={{
                        pathname: `/edit/[editProperties]`,
                        query: {
                            editProperties: _id,
                        },
                    }}
                >
                    <button className="bg-yellow-300 rounded-2xl">
                        <p className="p-2">Zasah</p>
                    </button>
                </Link>
                <button className="bg-yellow-300 rounded-2xl">
                    <p className="p-2" onClick={() => deleteProperties(_id)}>
                        Delete
                    </p>
                </button>
                {advertisementId == _id ? (
                    <>
                        <button
                            className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 bg-zinc-400 rounded-2xl"
                            data-te-toggle="tooltip"
                            title="You have already placed advertisement"
                            disabled
                        >
                            <p className="p-2">Zar ilgeesen</p>
                        </button>
                    </>
                ) : (
                    <button
                        className="bg-lime-300 rounded-2xl"
                        onClick={() => setAddingAdvertisement(true)}
                    >
                        <p className="p-2">Zar ilgeeh</p>
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserPropertyCard;
