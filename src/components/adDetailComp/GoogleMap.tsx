import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Map } from "./Map";

export const GoogleMapComp = ({ data }: any) => {
  console.log(data);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
  });

  if (!isLoaded || !data) return <div>Loading ... </div>;
  return <Map data={data} />;
};
