import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MapComponentForPropertyEdit from "@/components/PropertiesMap/MapComponentForPropertyEdit";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Utils from "@/utils/Utils";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import { toast } from "react-toastify";

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

function EditProperties(): JSX.Element {
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
  const [token, setToken] = useState<string>("");
  const [coordinate, setCoordinate] = useState<ICoordinates>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    editProperty();
    const localStorageValue: string = localStorage.getItem("token") || "";
    setToken(localStorageValue);
  }, [editingPropertyId]);

  function editProperty(): void {
    setLoading(true);
    axios
      .get(`${Utils.API_URL}/properties/${editingPropertyId}`)
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

  const onSave = (): void => {
    const reqBody = { ...propertyData, coordinates: coordinate };

    axios
      .put(`${Utils.API_URL}/properties`, reqBody, {
        headers: { "x-access-token": token },
      })
      .then((res) => {
        setPropertyData(res.data.result);
        toast.success("successfully edited", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        editProperty();
        route.push(`http://localhost:3000/user/${res.data.result.userID}`);
      })
      .catch(() => {
        toast.error("❌ unsuccessful", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const removePhoto = (index: number): void => {
    const { photos } = propertyData;
    photos.splice(index, 1);
    setPropertyData({ ...propertyData, photos });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setPropertyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendFile = async (files: any): Promise<void> => {
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

    const { photos } = propertyData;
    setPropertyData({ ...propertyData, photos: [...photos, ...arr] });

    setUploading(false);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className=" flex gap-5 flex-wrap justify-center mb-20">
        <div className=" max-w-7xl w-full mt-7 ">
          <div className="flex justify-between">
            <div className="w-2/5">
              <div className="flex justify-between w-full">
                <div className="input-container">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Guest Count
                  </label>
                  <input
                    type="number"
                    value={propertyData.guestCount}
                    onChange={handleChange}
                    name="guestCount"
                    placeholder="Guest Count"
                    className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="input-container">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Area
                  </label>
                  <input
                    type="number"
                    value={propertyData.area}
                    onChange={handleChange}
                    placeholder="Area"
                    name="area"
                    className=" input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="input-container">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Room Count
                  </label>
                  <input
                    type="number"
                    value={propertyData.roomCount}
                    onChange={handleChange}
                    name="Room Count"
                    placeholder="Room Count"
                    className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="input-container">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Bathroom Count
                  </label>
                  <input
                    type="number"
                    value={propertyData.bathroomCount}
                    onChange={handleChange}
                    name="bathroomCount"
                    placeholder="Bathroom Count"
                    className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="input-container">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={propertyData.locationName}
                    onChange={handleChange}
                    name="locationName"
                    placeholder="Location"
                    className="bairshil input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="input-container">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Desccription
                </label>
                <input
                  type="text"
                  value={propertyData.description}
                  onChange={handleChange}
                  name="description"
                  placeholder="Desccription"
                  className="tailbar input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="w-6/12">
              <div>
                <MapComponentForPropertyEdit
                  setCoordinates={setCoordinate}
                  propertyData={propertyData}
                />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="flex flex-wrap gap-3">
              {uploading ? (
                <Loading />
              ) : (
                propertyData.photos.map(
                  (photo, index): JSX.Element => (
                    <div
                      className="relative flex w-[200px] h-[200px]"
                      key={index}
                    >
                      <AiOutlineCloseCircle
                        className="absolute left-2 top-2 cursor-pointer text-gray-900  text-xl drop-shadow-lg"
                        onClick={(): void => removePhoto(index)}
                      />
                      <Image src={photo} width={300} height={150} alt="image" />
                    </div>
                  )
                )
              )}
            </div>
            <div>
              <div className="pt-5">
                <input
                  type="file"
                  multiple
                  onChange={(e): void => {
                    sendFile(e.target.files);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
          <div className="pt-3">
            <button
              className=" properties-button properties-button-save ps-3 pe-3 rounded-md"
              onClick={onSave}
            >
              <p className="p-2">Save</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProperties;
