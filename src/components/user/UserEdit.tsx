import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { LoginContext } from "../../Context/UserContext";
import { useContext } from "react";
import Utils from "@/utils/Utils";
import Image from "next/image";

export interface IEdit {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    district: string;
    subdistrict: string;
    street: string;
    block: number;
  };
  password: string;
  profilePicture: string;
  phoneNumber: number;
}

function UserEdit(): JSX.Element {
  const [userEdit, setUserEdit] = useState<IEdit>({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      district: "",
      subdistrict: "",
      street: "",
      block: 0,
    },
    password: "",
    profilePicture: "",
    phoneNumber: 0,
  });

  const [decoded, setDecoded] = useState<object | string | any>();

  const { setUserEdit1 } = useContext(LoginContext);
  // console.log(setUserEdit1);

  useEffect(() => {
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
  }, []);

  const route = useRouter();

  function updateUser(): void {
    const userID = decoded?.user._id;
    console.log("xaxaxaxa", userID, userEdit);

    axios
      .put(`${Utils.API_URL}/user/${userID}`, userEdit)
      .then((response: any) => {
        console.log("............", response);
        alert("Таны бүртгэл амжилттай ХАДГАЛАГДЛАА");
        setUserEdit1(response.data);
        route.push("/");
      })
      .catch((error: any) => console.log("error", error));
  }

  function getUsers(): void {
    const updateObj: IEdit = {
      firstName: decoded?.user.firstName,
      lastName: decoded?.user.lastName,
      email: decoded?.user.email,
      address: {
        district: decoded?.user.address.district,
        subdistrict: decoded?.user.address.subdistrict,
        street: decoded?.user.address.street,
        block: decoded?.user.address.block,
      },
      password: decoded?.user.password,
      profilePicture: decoded?.user.password,
      phoneNumber: decoded?.user.phoneNumber,
    };
    setUserEdit(updateObj);
  }

  useEffect(() => {
    if (decoded?.user) {
      getUsers();
    }
  }, [decoded]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setUserEdit((prevState) => ({
      ...prevState,

      [name]: value,
    }));
  };
  // console.log(userEdit);
  // console.log(test);
  return (
    <div className="h-screen ">
      <div className="h-full max-w-7xl">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-7/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Image
              src="/images/DevZoid.png"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <form className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                  Хувийн мэдээлэл
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Нэр</label>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    type="text"
                    name="firstName"
                    value={userEdit?.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Овог</label>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    type="text"
                    name="lastName"
                    value={userEdit?.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Имэйл</label>
                  <input
                    type="text"
                    name="email"
                    value={userEdit?.email}
                    onChange={handleChange}
                    className="border border-gray-400 py-1 px-2 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Утасны дугаар</label>
                  <input
                    value={userEdit?.phoneNumber}
                    type="number"
                    name="phoneNumber"
                    onChange={handleChange}
                    className="border border-gray-400 py-1 px-2 "
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <label>Дүүрэг</label>
                  <select
                    name="district"
                    onChange={(e) => {
                      setUserEdit({
                        ...userEdit,
                        address: {
                          ...userEdit.address,
                          district: e.target.value,
                        },
                      });
                    }}
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={userEdit?.address.district}
                  >
                    <option value=""></option>
                    <option value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</option>
                    <option value="Баянгол дүүрэг">Баянгол дүүрэг</option>
                    <option value="Сүхбаатар дүүрэг">Сүхбаатар дүүрэг</option>
                    <option value="Чингэлтэй дүүрэг">Чингэлтэй дүүрэг</option>
                    <option value="Налайх дүүрэг">Налайх дүүрэг</option>
                    <option value="Хан-Уул дүүрэг">Хан-Уул дүүрэг</option>
                    <option value="Сонгинохайрхан дүүрэг">
                      Сонгинохайрхан дүүрэг
                    </option>
                  </select>
                </div>
                <div>
                  <label>Хороо</label>
                  <select
                    onChange={(e) => {
                      setUserEdit({
                        ...userEdit,
                        address: {
                          ...userEdit.address,
                          subdistrict: e.target.value,
                        },
                      });
                    }}
                    className="border border-gray-400 py-1 px-2 w-full"
                    value={userEdit?.address.subdistrict}
                  >
                    <option value=""></option>
                    <option value="1">1-р хороо</option>
                    <option value="2">2-р хороо</option>
                    <option value="3">3-р хороо</option>
                    <option value="4">4-р хороо</option>
                    <option value="5">5-р хороо</option>
                    <option value="6">6-р хороо</option>
                    <option value="7">7-р хороо</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Гудамж</label>
                  <input
                    onChange={handleChange}
                    value={userEdit?.address.street}
                    name="{address.street}"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Байр</label>
                  <input
                    onChange={(e) => {
                      setUserEdit({
                        ...userEdit,
                        address: {
                          ...userEdit.address,
                          block: e.target.valueAsNumber,
                        },
                      });
                    }}
                    type="number"
                    value={userEdit?.address.block}
                  />
                </div>
              </div>
              <div className="mt-5 text-center gap-10 lg:text-center">
                <button
                  id="button"
                  onClick={updateUser}
                  type="button"
                  className="w-1/2 ease-in duration-300 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-color="dark"
                >
                  Хадгалах
                </button>
                <Link href="/">
                  <button
                    id="button"
                    type="button"
                    className="w-1/2 ease-in duration-300 inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-color="dark"
                  >
                    Буцах
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
