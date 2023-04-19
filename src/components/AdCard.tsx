import React from "react";
import Properties from "./propertyData";
import Slider from "./Slider";
import Link from "next/link";


const AdCard = ({ item, key }: any) => {
    console.log(item);

    return (
        <div className="flex flex-wrap flex-col max-w-[25%] min-w-[300px] h-96 ">
            <Slider images={item.propertyID.photos} className="" />
            <div className="rounded-2xl bg-slate-300/90 flex flex-col w-[80%] p-6 -mt-8 ml-4 z-20">
                <span className="flex">
                    Area:
                    <div className="flex self-end">{item.propertyID.area}.m.k</div>
                </span>
                <span>Room Number: {item.propertyID.roomNumber}</span>
                <span>Location:{item.propertyID.locationName}</span>
                <span>Price: {item.price}</span>
                <Link href={{
                    pathname: `/[id]/[detail]`,
                    query: {
                        id: item._id,
                        detail: item.propertyID._id,
                    },
                }}>See More ...</Link>
            </div>
        </div>
    );
};

export default AdCard;
