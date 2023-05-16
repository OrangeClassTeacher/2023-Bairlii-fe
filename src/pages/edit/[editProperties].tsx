import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import MapComponentForPropertyEdit from "@/components/PropertiesMap/MapComponentForPropertyEdit";
import { AiOutlineCloseCircle } from "react-icons/ai";

export interface IProperty {
  _id: string;
  userID: string;
  rating: string;
  comments: string[];
  photos: string[];
  PanoramaPhoto: string[];
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  area: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  locationName: string;
  description: string;
  category: string;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

function EditProperties() {
  const route = useRouter();
  const editingPropertyId = route.query.editProperties;
  const [propertyData, setPropertyData] = useState<IProperty>({
    _id: "",
    userID: "",
    rating: "",
    comments: [""],
    photos: [""],
    PanoramaPhoto: [""],
    guestCount: 0,
    roomCount: 0,
    bathroomCount: 0,
    area: 0,
    coordinates: {
      lat: 0,
      lng: 0,
    },
    locationName: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [decoded, setDecoded] = useState<object | string | any>();
  const [token, setToken] = useState<string>("");
  const [coordinate, setCoordinate] = useState<ICoordinates>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    editProperty();
    let localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    setToken(localStorageValue)
  }, [editingPropertyId]);

  function editProperty() {
    setLoading(true)
    axios
      .get(`http://localhost:9000/api/properties/${editingPropertyId}`)
      .then((res) => {
        setPropertyData(res.data.result);
        console.log();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const onSave = () => {
    let reqBody = { ...propertyData, coordinates: coordinate }

    axios
      .put(`http://localhost:9000/api/properties`, reqBody, {
        headers: { "x-access-token": token },
      })
      .then((res) => {
        setPropertyData(res.data.result);
        alert("Editted successfully")
        editProperty();
        route.push(`http://localhost:3000/user/${res.data.result.userID}`)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const removePhoto = (index: number) => {
    const { photos } = propertyData;
    photos.splice(index, 1)
    setPropertyData({ ...propertyData, photos })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPropertyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendFile = async (files: any) => {
    setUploading(true);
    const url = `http://api.cloudinary.com/v1_1/dnowpv9qs/upload`;
    const newArr = [];
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      newArr.push(files[i]);
    }
    console.log(newArr);

    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", "775479378444756");
        formData.append("upload_preset", "jnoyojr2");

        return axios.post(url, formData);
      })
    );
    const arr: any = [];

    promise.map((response) => {
      arr.push(response.data.secure_url);
    });

    const { photos } = propertyData
    setPropertyData({ ...propertyData, photos: [...photos, ...arr] });

    setUploading(false);
  };

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="flex w-full justify-center">
        <div>
          <div className="flex gap-6 justify-center max-w-5xl w-full mt-7 ">
            <div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={propertyData?.description}
                  onChange={handleChange}
                  name="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Guest Count
                </label>
                <input
                  type="text"
                  value={propertyData?.guestCount}
                  onChange={handleChange}
                  name="guestCount"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Room Count
                </label>
                <input
                  type="text"
                  value={propertyData?.roomCount}
                  onChange={handleChange}
                  name="roomCount"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Bathroom Count
                </label>
                <input
                  type="text"
                  value={propertyData?.bathroomCount}
                  onChange={handleChange}
                  name="bathroomCount"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Area
                </label>
                <input
                  type="text"
                  value={propertyData?.area}
                  onChange={handleChange}
                  name="area"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Location Name
                </label>
                <input
                  type="text"
                  value={propertyData?.locationName}
                  onChange={handleChange}
                  name="locationName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <MapComponentForPropertyEdit setCoordinates={setCoordinate} coordinates={coordinate} propertyData={propertyData} />
              </div>
              <div>
                {uploading ? <div>Uploading</div> : propertyData?.photos?.map((photo, index): JSX.Element => {
                  return (
                    <div className="relative w-[200px] h-[200px]" key={index}>
                      <AiOutlineCloseCircle className="absolute right-2 top-2 cursor-pointer text-white drop-shadow-lg" onClick={() => removePhoto(index)} />
                      <img src={photo} width={200} height={200} alt="image" />
                    </div>
                  )
                })}
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    sendFile(e.target.files);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="pt-3">
                <button className=" bg-lime-200 rounded-2xl" onClick={onSave}>
                  <p className="p-2">Hadgalah</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProperties;
