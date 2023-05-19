import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { ICoordinates } from "@/pages/edit/[editProperties]";

const MapComponentForPropertyEdit = ({
  setCoordinates,
  coordinates,
  propertyData,
}: {
  setCoordinates: any;
  coordinates: ICoordinates;
  propertyData: any;
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
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

  if (!isLoaded)
    return (
      <div className="flex justify-center h-full pt-52">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  return (
    <div>
      <div>
        X:
        <input
          placeholder="x"
          value={saveCoordinates.x}
          onFocus={() => {
            setCursorType("crosshair");
            setChoose(false);
          }}
          className="form-input"
        />
        Y:
        <input
          placeholder="y"
          value={saveCoordinates.y}
          onFocus={() => {
            setCursorType("crosshair");
            setChoose(false);
          }}
          className="form-input"
        />
      </div>

      <GoogleMap
        options={{ draggableCursor: cursorType, scrollwheel: true }}
        onClick={(e) => {
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
