import React from "react";
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
import AdCard from "../AddProperty/AdCard";

export const MapForHome = ({ data }: any): JSX.Element => {
  const [selected, setSelected] = useState<any>({});

  const onSelect = (item: any): void => {
    setSelected(item);
  }
  console.log(data);


  return (
    <div className="w-full h-full">
      <GoogleMap
        zoom={12}
        center={{
          lat: 47.91491313549779,
          lng: 106.90851741242646,
        }}
        mapContainerClassName="map-container-for-home"
      >
        {
          data.map((item: any, index: any) => <MarkerF
            position={{
              lat: item?.propertyID?.coordinates?.lat,
              lng: item?.propertyID?.coordinates?.lng,
            }}
            key={index}
            onClick={(): void => onSelect(item)}
          />
          )
        }
        {
          selected?.propertyID
          &&
          (
            <InfoWindowF
              position={{
                lat: selected?.propertyID?.coordinates?.lat,
                lng: selected?.propertyID?.coordinates?.lng,
              }}
              // clickable={true}
              onCloseClick={(): void => setSelected({})}
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
