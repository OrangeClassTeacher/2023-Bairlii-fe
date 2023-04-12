import React from 'react'
import Properties from './propertyData';

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
    let data: any = {}

    //Populate eer shiidegdene
    Properties.map((e) => {
        if (item.propertyID == e._id) {
            data = { ...item, propertyDetail: { ...e } }
        }
    })

    console.log(data);


    return (
        <>
            <div className="flex w-48 flex-wrap">
                <img src={data.propertyDetail.photos[0]} />
                <span>Area: {data.propertyDetail.area}.m.k</span>
                <span>Room Number: {data.propertyDetail.roomNumber}</span>
                <span>{data.propertyDetail.locationName}</span>
                <span>Price: {data.price}</span>
            </div>
        </>
    )
}

export default AdCard
