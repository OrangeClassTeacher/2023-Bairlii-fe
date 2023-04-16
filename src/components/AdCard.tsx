import React from "react";
import Properties from "./propertyData";
import Slider from "./Slider";
import Link from "next/link";

interface IAdvertisements {
    _id: string;
    userID: string;
    propertyID: string;
    price: number;
    rentingDuration: number;
    paymentContition: string;
    adDuration: number;
}

interface adCardProps {
    key: number;
    item: IAdvertisements;
}

interface IProperties {
    _id: string;
    userID: string;
    photos: string[];
    panaromaPhoto: string;
    roomNumber: number;
    area: number;
    locationCoordinate: {
        lang: number;
        long: number;
    };
    locationName: string;
}

const AdCard = ({ item, key }: adCardProps) => {
    let data: any = {};

    //Populate eer shiidegdene
    Properties.map((e) => {
        if (item.propertyID == e._id) {
            data = { ...item, propertyDetail: { ...e } };
        }
    });

    return (
        <div className="flex flex-wrap flex-col max-w-[25%] min-w-[300px] h-96 ">
            <Slider images={data.propertyDetail.photos} className="" />
            <div className="rounded-2xl bg-slate-300/90 flex flex-col w-[80%] p-6 -mt-8 ml-4 z-20">
                <span className="flex">
                    Area:
                    <div className="flex self-end">{data.propertyDetail.area}.m.k</div>
                </span>
                <span>Room Number: {data.propertyDetail.roomNumber}</span>
                <span>Location:{data.propertyDetail.locationName}</span>
                <span>Price: {data.price}</span>
                <Link href={{
                    pathname: `/[id]/[detail]`,
                    query: {
                        id: item._id,
                        detail: item.propertyID,
                    },
                }}>See More ...</Link>
            </div>
        </div>
    );
};

export default AdCard;
