/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AddAdvertisement from "./AddAdvertisement";
import axios from "axios";
import Utils from "@/utils/Utils";

const UserPropertyCard = ({
  propertyData,
  deleteProperties,
}: any): JSX.Element => {
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

  function checkActiveAdvertisement(): void {
    axios
      .get(`${Utils.API_URL}/advertisement/check/${_id}`)
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
    <div className="card ">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="card-inner">
        <div className="w-[305px] p-2 rounded-md ">
          <div className="">
            <img
              className="rounded-md h-40 w-72 object-cover"
              src={photos[0]}
              alt=""
            />
          </div>
          <div className="h-[250px] scroll  ">
            <div className="pt-4">
              <div className=" flex   justify-between p-2 rounded-md ">
                <p className=" rounded-md ps-2 pr-2 font-bold">Guest Count</p>
                <p className="rounded-xl  pr-2  ps-2">{guestCount}</p>
              </div>
              <div className="pt-2">
                <p className="flex  justify-between p-2 rounded-md ">
                  <p className="  rounded-md ps-2 pr-2 font-bold">Room Count</p>
                  <p className="rounded-xl   pr-2 ps-2">{roomCount}</p>
                </p>
              </div>
              <div className="pt-2">
                <p className="flex  justify-between p-2 rounded-md ">
                  <p className="  rounded-md ps-2 pr-2 font-bold">
                    Bathroom Count
                  </p>
                  <p className="  rounded-xl pr-2 ps-2">{bathroomCount}</p>
                </p>
              </div>
              <div className="pt-2">
                <p className="flex  justify-between p-2 rounded-md">
                  <p className="  rounded-md ps-2 pr-2 font-bold">Area</p>
                  <p className="  rounded-xl pr-2 ps-2">{area + "м.кв"}</p>
                </p>
              </div>
              <div className="pt-2">
                <p className="flex  justify-between p-2 rounded-md">
                  <p className="  rounded-md ps-2 pr-2 font-bold">Location</p>
                  <p className="  rounded-xl pr-2 ps-2">{locationName}</p>
                </p>
              </div>
            </div>
            <div className="pt-2">
              <p className="  justify-between p-2 rounded-md ">
                <p className="  rounded-md ps-2 pr-2 font-bold">Description</p>
                <p className="  rounded-md pr-2 ps-2  ">{description}</p>
              </p>
            </div>
            <div className="flex justify-between ps-2 pe-2 pt-3">
              <Link
                href={{
                  pathname: `/edit/[editProperties]`,
                  query: {
                    editProperties: _id,
                  },
                }}
              >
                <button className="ps-3 pe-3 properties-button properties-button-edit bg-gray-100 rounded-lg  text-center">
                  <p className="p-2">Edit</p>
                </button>
              </Link>
              <button className="ps-2 pe-2  bg-gray-100 properties-button properties-button-delete rounded-md  text-center ">
                <p className="p-2" onClick={(): void => deleteProperties(_id)}>
                  Delete
                </p>
              </button>
              {advertisementId == _id ? (
                <>
                  <button
                    className="ps-2 pe-2  bg-gray-600  properties-button properties-button-sent   rounded-md  text-center"
                    data-te-toggle="tooltip"
                    title="You have already placed advertisement"
                    disabled
                  >
                    <p className="p-2">Sent</p>
                  </button>
                </>
              ) : (
                <button
                  className="bg-gray-100 ps-2 pe-2 properties-button properties-button-send rounded-md"
                  onClick={(): void => setAddingAdvertisement(true)}
                >
                  <p className="p-2">Send</p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPropertyCard;
