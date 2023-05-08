import React from 'react'
import { BsListUl } from 'react-icons/bs'
import { useLoadScript } from "@react-google-maps/api";
import { MapForHome } from "./Maps";

export const Maps = ({ setSelected }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
  });


  if (!isLoaded) return <div>Loading ... </div>;
  return ( 
    <>
        <MapForHome/>
        <span className="flex items-center gap-2 bg-slate-600 p-2 rounded-xl text-white fixed bottom-20 z-30 border-2 border-slate-600 cursor-pointer" onClick={() => setSelected("Ads")}>
        Show list <BsListUl />
      </span>
    </>
    
    )
}
