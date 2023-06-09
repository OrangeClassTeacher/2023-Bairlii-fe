import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Loading from "../loading/Loading";

interface MapPropertiesProps {
  setValue: (id: string, value: any) => void;
}
interface ISaveCoordinates {
  x: any;
  y: any;
}

const MapProperties: React.FC<MapPropertiesProps> = ({
  setValue,
}: any): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });
  const [cursorType, setCursorType] = useState("");
  const [saveCoordinates, setSaveCoordinates] = useState<ISaveCoordinates>({
    x: "",
    y: "",
  });
  const [choose, setChoose] = useState(false);
  const mapCenter = useMemo(() => ({ lat: 47.92123, lng: 106.918556 }), []);
  if (!isLoaded) return <Loading />;
  return (
    <div>
      <div>
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
        center={mapCenter}
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
