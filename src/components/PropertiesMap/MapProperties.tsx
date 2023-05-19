import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

interface MapPropertiesProps {
  setValue: (id: string, value: any) => void;
}
interface ISaveCoordinates {
  x: any;
  y: any;
}

const MapProperties: React.FC<MapPropertiesProps> = ({ setValue }: any): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
  });
  const [cursorType, setCursorType] = useState("");
  const [saveCoordinates, setSaveCoordinates] = useState<ISaveCoordinates>({
    x: "",
    y: "",
  });
  const [choose, setChoose] = useState(false);

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
        onClick={(e): void => {
          if (!choose) {
            setValue("coordinates", {
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
        center={{ lat: 47.92123, lng: 106.918556 }}
        mapContainerStyle={{ height: "400px" }}
      >
        <MarkerF
          position={{ lat: +saveCoordinates.x, lng: +saveCoordinates.y }}
        />
      </GoogleMap>
    </div>
  );
};

export default MapProperties;
