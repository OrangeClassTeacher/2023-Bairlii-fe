import React from "react";
import { BsHouses } from "react-icons/bs";
import { TbUserCheck } from "react-icons/tb";
import Image from "next/image";

const LandlordInfo = ({ data }: any): JSX.Element => {
  const userData = data?.userID;

  return (
    <div className="flex justify-around">
      <div>
        <Image
          src={userData?.profilePicture}
          alt="propic"
          className="rounded-[22px]"
        />
      </div>
      <div className="text-emerald-600 text-3xl font-semibold justify-center  flex flex-col gap-6">
        <div>
          {userData?.firstName} {userData?.lastName}
        </div>
        <div>{userData?.email}</div>
        <div>Phone: {userData?.phoneNumber}</div>
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
