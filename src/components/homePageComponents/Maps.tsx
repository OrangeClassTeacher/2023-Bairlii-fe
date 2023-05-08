import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export const MapForHome = () => {
  return (
    <div className="w-full h-[90vh]">
      <GoogleMap
        zoom={14}
        center={{
          lat: 47.91491313549779,
          lng: 106.90851741242646,
        }}
        mapContainerClassName="map-container-for-home"
      >
        {/* <MarkerF
        position={{
          lat: data?.propertyID?.locationCoordinate?.lang,
          lng: data?.propertyID?.locationCoordinate?.long,
        }}
      /> */}
      </GoogleMap>
    </div>
  );
};
