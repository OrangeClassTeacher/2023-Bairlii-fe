import React from 'react'
import AdCard from './AdCard'
import AdsData from './adData'

interface IAdvertisements {
    _id: string;
    userID: string;
    propertyID: string;
    price: number;
    rentingDuration: number;
    paymentContition: string;
    adDuration: number;
}

const Ads = (): JSX.Element => {
    const adsData: Array<IAdvertisements> = AdsData;
    return (
        <div className='flex flex-wrap gap-8'>
            {adsData.map((item, index): any => {
                return (<>
                    <AdCard key={index} item={item} />
                </>)
            })}
        </div>
    )
}

export default Ads
