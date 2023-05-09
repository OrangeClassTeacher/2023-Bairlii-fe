import React from "react";
import { GoogleMap, MarkerF, InfoWindow, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
import AdCard from "../AdCard";

export const MapForHome = ({ data }: any) => {
  const [selected, setSelected] = useState<any>({});

  const onSelect = (item: any) => {
    setSelected(item);
  }


  return (
    <div className="w-full h-full">
      <GoogleMap
        zoom={14}
        center={{
          lat: 47.91491313549779,
          lng: 106.90851741242646,
        }}
        mapContainerClassName="map-container-for-home"
      >
        {
          data.map((item: any, index: any) => {
            return <MarkerF
              position={{
                lat: item?.propertyID?.locationCoordinate?.lang,
                lng: item?.propertyID?.locationCoordinate?.long,
              }}
              key={index}
              onClick={() => onSelect(item)}
            />
          })
        }
        {
          selected?.propertyID
          &&
          (
            <InfoWindowF
              position={{
                lat: selected?.propertyID?.locationCoordinate?.lang,
                lng: selected?.propertyID?.locationCoordinate?.long,
              }}
              // clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div className="w-[300px]">
                <AdCard item={selected} />
              </div>
            </InfoWindowF>
          )
        }
      </GoogleMap>
    </div>
  );
};
