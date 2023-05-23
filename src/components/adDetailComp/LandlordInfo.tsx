import Link from "next/link";
import React from "react";
import { BsHouses } from "react-icons/bs";
import { TbUserCheck } from "react-icons/tb";

const LandlordInfo = ({ data }: any): JSX.Element => {
  const userData = data?.userID;

  return (
    <div className="flex justify-around card-inner landlord-card ]">
      <div className="landlord-card-info ">
        <img
          src={userData?.profilePicture}
          alt="propic"
          className="rounded-[22px]  landlord-card-avatar"
        />
      </div>
      <div className="text-emerald-600 text-3xl  justify-center  flex flex-col gap-6">
        <div className="text-black font-bold ">
          <div>{userData?.firstName}</div> <div>{userData?.lastName}</div>
        </div>
        <div className="ms-5 -mt-2">
          <div className="flex justify-between w-[280px] ">
            <p className="text-black text-2xl font-bold">Email:</p>
            <Link
              href={`mailto:${userData?.email}`}
              className="landlord-card-email text-black underline text-xl pt-1"
            >
              {userData?.email}
            </Link>
          </div>
          <div className="flex justify-between w-[200px]">
            <p className="text-black text-2xl font-bold">Phone:</p>
            <Link
              href={`tel:${userData?.phoneNumber}`}
              className="landlord-card-email text-black underline text-xl pt-1"
            >
              {userData?.phoneNumber}
            </Link>
          </div>
        </div>
      </div>
      <div className="justify-center flex flex-col">
        <div className="justify-center flex flex-col items-center">
          <BsHouses className="text-gray-600 text-8xl font-black" />2 houses
        </div>
        <div className=" justify-center flex flex-col items-center">
          <TbUserCheck className=" text-gray-600 text-8xl font-black" />
          Member since April 2023
        </div>
      </div>
    </div>
  );
};

export default LandlordInfo;
