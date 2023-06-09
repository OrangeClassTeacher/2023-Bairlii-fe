import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Loading from "../loading/Loading";

const MapComponentForPropertyEdit = ({
  setCoordinates,
  propertyData,
}: {
  setCoordinates: any;
  propertyData: any;
}): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });
  const [cursorType, setCursorType] = useState("");
  const [saveCoordinates, setSaveCoordinates] = useState<any>({ x: "", y: "" });
  const [choose, setChoose] = useState(false);

  useEffect(() => {
    setSaveCoordinates({
      x: propertyData?.coordinates?.lat,
      y: propertyData?.coordinates?.lng,
    });
    setCoordinates({
      lat: propertyData?.coordinates?.lat,
      lng: propertyData?.coordinates?.lng,
    });
  }, [propertyData]);

  console.log(saveCoordinates);

  if (!isLoaded) return <Loading />;
  return (
    <div>
      <div className="flex justify-between  ">
        <div className="border-dashed border-2 border-black p-2 mb-2 mt-4 xl:mt-0 rounded  ">
          X:
          <input
            placeholder="x"
            value={saveCoordinates.x}
            onFocus={(): void => {
              setCursorType("crosshair");
              setChoose(false);
            }}
            className="form-input"
          />
        </div>
        <div className=" border-dashed border-2 border-black p-2 mb-2 mt-4 xl:mt-0 rounded">
          Y:
          <input
            placeholder="y"
            value={saveCoordinates.y}
            onFocus={(): void => {
              setCursorType("crosshair");
              setChoose(false);
            }}
            className="form-input"
          />
        </div>
      </div>

      <GoogleMap
        options={{ draggableCursor: cursorType, scrollwheel: true }}
        onClick={(e): void => {
          if (!choose) {
            setCoordinates({
              lat: e.latLng?.lat(),
              lng: e.latLng?.lng(),
            });
            setSaveCoordinates({
              x: e.latLng?.lat() || "",
              y: e.latLng?.lng() || "",
            });
          } else {
            return;
          }
        }}
        zoom={14}
        center={{ lat: +saveCoordinates.x, lng: +saveCoordinates.y }}
        mapContainerStyle={{ height: "400px" }}
      >
        <MarkerF
          position={{ lat: +saveCoordinates.x, lng: +saveCoordinates.y }}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponentForPropertyEdit;
