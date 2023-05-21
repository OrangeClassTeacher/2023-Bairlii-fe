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
          className="rounded-[22px] landlord-card-avatar"
        />
      </div>
      <div className="text-emerald-600 text-3xl font-semibold justify-center  flex flex-col gap-6">
        <div>
          <div>{userData?.firstName}</div> <div>{userData?.lastName}</div>
        </div>
        <div className="flex justify-between w-[400px]">
          <p>Email:</p>
          <Link
            href={`mailto:${userData?.email}`}
            className="landlord-card-email"
          >
            {userData?.email}
          </Link>
        </div>
        <div className="flex justify-between w-[270px]">
          <p>Phone:</p>
          <Link
            href={`tel:${userData?.phoneNumber}`}
            className="landlord-card-email"
          >
            {userData?.phoneNumber}
          </Link>
        </div>
      </div>
      <div className="justify-center flex flex-col">
        <div className="justify-center flex flex-col items-center">
          <BsHouses className="text-emerald-600 text-8xl font-black" />2 houses
        </div>
        <div className="justify-center flex flex-col items-center">
          <TbUserCheck className="text-emerald-600 text-8xl font-black" />
          Member since April 2023
        </div>
      </div>
    </div>
  );
};

export default LandlordInfo;
