import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./Map";

export const GoogleMapComp = ({ data }: any): JSX.Element => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });

  if (!isLoaded || !data) return <div>Loading ... </div>;
  return <Map data={data} />;
};
