import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import jwt from "jsonwebtoken";
import Utils from "@/utils/Utils";
import { toast } from "react-toastify";

const AddAdvertisement = ({
  setAddingAdvertisement,
  _id,
  setAdvertisementId,
}: any): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      price: 100,
      rentingDuration: 3,
      paymentCondition: "",
      adDuration: 1,
    },
  });

  const [decoded, setDecoded] = useState<object | string | any>();
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    setToken(localStorageValue);
  }, []);

  const createAdvertisement = (data: any): void => {
    const reqBody = {
      userID: decoded?.user?._id,
      propertyID: _id,
      price: data.price,
      rentingDuration: data.rentingDuration,
      paymentCondition: data.paymentCondition,
      adDuration: data.adDuration,
    };

    axios
      .post(`${Utils.API_URL}/advertisement`, reqBody, {
        headers: { "x-access-token": token },
      })
      .then((response: any) => {
        if (response)
          toast.success("🏠Your placement is successful", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        setAddingAdvertisement(false);
        setAdvertisementId(_id);
      })
      .catch(() =>
        toast.error("unsuccessful", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  return (
    <div className="w-[305px] h-[426px] p-2 rounded-xl bg-gray-200 flex flex-col gap-2">
      <form>
        <div className="mt-4">
          <label
            htmlFor="paymentCondition"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Payment condition
          </label>
          <input
            {...register("paymentCondition", { required: true })}
            type="text"
            id="paymentCondition"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="paymentContition"
            required
          />
          {errors.paymentCondition && (
            <div className="invalid-feedback text-red-500 text-xs">
              Payment Condition required
            </div>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price per month
          </label>
          <input
            {...register("price", { required: true, min: 100 })}
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="price per month"
            required
          />
          {errors.price && (
            <div className="invalid-feedback text-red-500 text-xs">
              Price required
            </div>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="rentingDuration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Renting Duration
          </label>
          <input
            {...register("rentingDuration", { required: true, min: 3 })}
            type="number"
            id="rentingDuration"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Renting Duration"
            required
          />
          {errors.rentingDuration && (
            <div className="invalid-feedback text-red-500 text-xs">
              Renting duration required
            </div>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="adDuration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Advertisement Duration
          </label>
          <input
            {...register("adDuration")}
            type="number"
            id="adDuration"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Advertisement Duration"
            required
          />
          {errors.adDuration && (
            <div className="invalid-feedback text-red-500 text-xs">
              Advertisement duration required
            </div>
          )}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={(): void => reset()}
            className="properties-button properties-button-reset ps-4 pe-4  pt-2 pb-2 rounded-md"
            type="button"
          >
            Reset
          </button>
          <button
            onClick={(): void => setAddingAdvertisement(false)}
            className="properties-button properties-button-return ps-4 pe-4  pt-2 pb-2 rounded-md"
            type="button"
          >
            Return
          </button>
          <button
            className="properties-button properties-button-save ps-4 pe-4  pt-2 pb-2 rounded-md"
            onClick={handleSubmit(createAdvertisement)}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAdvertisement;
