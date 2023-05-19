import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import jwt from "jsonwebtoken";
import Utils from '@/utils/Utils';


const AddAdvertisement = ({ setAddingAdvertisement, _id, setAdvertisementId }: any): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            price: 100000,
            rentingDuration: 3,
            paymentCondition: "",
            adDuration: 1,
        }
    });

    const [decoded, setDecoded] = useState<object | string | any>();
    const [token, setToken] = useState<string | null>();

    useEffect(() => {
        let localStorageValue: string = localStorage.getItem("token") || "";
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
                if (response) alert("Таны бүртгэл амжилттай үүслээ");
                setAddingAdvertisement(false)
                setAdvertisementId(_id)
            })
            .catch((error: any) => alert(error))
    }

    return (
        <div className="w-60 p-2 rounded-xl bg-gray-200 flex flex-col gap-2">
            <form>
                <div>
                    <label htmlFor="paymentCondition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment condition</label>
                    <input {...register("paymentCondition", { required: true })} type="text" id="paymentCondition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="paymentContition" required />
                    {errors.paymentCondition && (
                        <div className="invalid-feedback text-red-500 text-xs">
                            Payment Condition required
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price per month</label>
                    <input {...register("price", { required: true, min: 100000 })} type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price per month" required />
                    {errors.price && (
                        <div className="invalid-feedback text-red-500 text-xs">
                            Price required
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="rentingDuration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renting Duration</label>
                    <input {...register("rentingDuration", { required: true, min: 3 })} type="number" id="rentingDuration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Renting Duration" required />
                    {errors.rentingDuration && (
                        <div className="invalid-feedback text-red-500 text-xs">
                            Renting duration required
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="adDuration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Advertisement Duration</label>
                    <input {...register("adDuration")} type="number" id="adDuration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Advertisement Duration" required />
                    {errors.adDuration && (
                        <div className="invalid-feedback text-red-500 text-xs">
                            Advertisement duration required
                        </div>
                    )}
                </div>
                <div>
                    <button
                        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                        onClick={handleSubmit(createAdvertisement)}
                    >
                        Save
                    </button>
                    <button
                        onClick={(): void => reset()}
                        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                        type="button"
                    >
                        Reset
                    </button>
                    <button
                        onClick={(): void => setAddingAdvertisement(false)}
                        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                        type="button"
                    >
                        Return
                    </button>
                </div>
            </form>
        </div >
    )
}

export default AddAdvertisement
