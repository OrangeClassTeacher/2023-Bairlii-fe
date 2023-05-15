import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { ICoordinates } from "@/pages/edit/[editProperties]";


const MapComponentForPropertyEdit = ({ setCoordinates, coordinates, propertyData }: { setCoordinates: any, coordinates: ICoordinates, propertyData: any }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_API as string,
    });
    const [cursorType, setCursorType] = useState("");
    const [saveCoordinates, setSaveCoordinates] = useState({ x: "", y: "" });
    const [choose, setChoose] = useState(false);

    console.log(propertyData);


    useEffect(() => {
        setSaveCoordinates({ x: propertyData?.coordinates?.lat, y: propertyData?.coordinates?.lng });
    }, [propertyData])


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
                onClick={(e) => {
                    if (!choose) {
                        setCoordinates({
                            lat: e.latLng?.lat(),
                            lng: e.latLng?.lng(),
                        });
                        setSaveCoordinates({ x: e.latLng?.lat(), y: e.latLng?.lng() });
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
        </div >
    );
};

export default MapComponentForPropertyEdit;
