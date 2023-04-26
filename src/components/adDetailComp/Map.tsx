import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export const Map = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <GoogleMap
        zoom={14}
        center={{
          lat: data?.propertyID?.locationCoordinate?.lang,
          lng: data?.propertyID?.locationCoordinate?.long,
        }}
        mapContainerClassName="map-container"
      >
        <MarkerF
          position={{
            lat: data?.propertyID?.locationCoordinate?.lang,
            lng: data?.propertyID?.locationCoordinate?.long,
          }}
        />
      </GoogleMap>
    </div>
  );
};
