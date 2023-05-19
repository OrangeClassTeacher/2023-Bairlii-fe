import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

interface MapPropertiesProps {
  setValue: (id: string, value: any) => void;
}
interface ISaveCoordinates {
  x: any, y: any
}

const MapProperties: React.FC<MapPropertiesProps> = ({ setValue }: any): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
  });
  const [cursorType, setCursorType] = useState("");
  const [saveCoordinates, setSaveCoordinates] = useState<ISaveCoordinates>({ x: "", y: "" });
  const [choose, setChoose] = useState(false);

  if (!isLoaded) return <div>Loading ... </div>;
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
            setSaveCoordinates({ x: e.latLng?.lat() || "", y: e.latLng?.lng() || "" });
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
