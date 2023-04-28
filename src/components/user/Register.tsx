import Link from "next/link";
import { useState } from "react";
import axios from "axios";

interface IUsers {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    district: string;
    subdistrict: string;
    street: string;
    block: number;
    fence: number;
  };
  password: string;
  profilePicture: string;
  phoneNumber: number;
  ratingAsRenter: string;
  ratingAsLandlord: string;
}

function Register(): any {
  const myUserObj = {
    firstName: "",
    lastName: "",
    email: "",
    address: {
      district: "",
      subdistrict: "",
      street: "",
      block: 0,
      fence: 0,
    },
    password: "",
    profilePicture: "",
    phoneNumber: 0,
    ratingAsRenter: "",
    ratingAsLandlord: "",
  };
  const [loading, setLoading] = useState<Boolean>(false);

  const [newUser, setNewUser] = useState<IUsers>(myUserObj);

  const onChangeFN = (e: any) => {
    setNewUser({ ...newUser, firstName: e.target.value });
  };
  const onChangeLN = (e: any) => {
    setNewUser({ ...newUser, lastName: e.target.value });
  };
  const onChangeEmail = (e: any) => {
    setNewUser({ ...newUser, email: e.target.value });
  };
  const onChangeDistrict = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, district: e.target.value },
    });
  };
  const onChangeSubDistrict = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, subdistrict: e.target.value },
    });
  };
  const onChangeStreet = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, street: e.target.value },
    });
  };
  const onChangeBlock = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, block: e.target.value },
    });
  };
  const onChangePassword = (e: any) => {
    setNewUser({ ...newUser, password: e.target.value });
  };
  const onChangePhone = (e: any) => {
    setNewUser({ ...newUser, phoneNumber: e.target.value });
  };

  const sendFile = async (fieldName: any, files: any) => {
    setLoading(true);
    console.log(files);

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
    console.log(promise);
    const arr: any = [];

    promise.map((response) => {
      arr.push(response.data.secure_url);
    });
    if (fieldName == "images") {
      console.log(arr);
      setNewUser({ ...newUser, profilePicture: arr[0] });
    }
    setLoading(false);
  };

  const onSubmit = () => {
    console.log(newUser);

    axios
      .post(`http://localhost:9000/api/users`, newUser)
      .then((response: any) => {
        console.log(response);

        alert("Таны бүртгэл амжилттай үүслээ");
      })
      .catch((error: any) => console.log("error", error));
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                  Шинээр бүртгүүлэх
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Нэр</label>
                  <input
                    onChange={onChangeFN}
                    type="text"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Овог</label>
                  <input
                    onChange={onChangeLN}
                    type="text"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label>Имэйл</label>
                <input
                  onChange={onChangeEmail}
                  type="text"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <label>Дүүрэг</label>
                  <select
                    onChange={onChangeDistrict}
                    className="border border-gray-400 py-1 px-2 w-full"
                  >
                    <option value="volvo"></option>
                    <option value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</option>
                    <option value="opel">Баянгол дүүрэг</option>
                    <option value="audi">Сүхбаатар дүүрэг</option>
                    <option value="saab">Чингэлтэй дүүрэг</option>
                    <option value="opel">Налайх дүүрэг</option>
                    <option value="audi">Хан-Уул дүүрэг</option>
                    <option value="audi">Сонгинохайрхан дүүрэг</option>
                  </select>
                </div>
                <div>
                  <label>Хороо</label>
                  <select
                    onChange={onChangeSubDistrict}
                    className="border border-gray-400 py-1 px-2 w-full"
                  >
                    <option value="volvo"></option>
                    <option value="saab">1-р хороо</option>
                    <option value="opel">2-р хороо</option>
                    <option value="audi">3-р хороо</option>
                    <option value="saab">4-р хороо</option>
                    <option value="opel">5-р хороо</option>
                    <option value="audi">6-р хороо</option>
                    <option value="audi">7-р хороо</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Гудамж</label>
                  <input
                    onChange={onChangeStreet}
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Байр</label>
                  <input
                    onChange={onChangeBlock}
                    type="number"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Нууц үг</label>
                  <input
                    onChange={onChangePassword}
                    type="password"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Утасны дугаар</label>
                  <input
                    onChange={onChangePhone}
                    type="number"
                    className="border border-gray-400 py-1 px-2"
                  />
                </div>
              </div>

              <div className="mt-5 mb-5">
                <label>Профайл зураг</label>
                <input
                  onChange={(e) => {
                    sendFile("images", e.target.files);
                  }}
                  type="file"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
                <span> {loading && "Uploading..."}</span>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    form="exampleCheck2"
                  >
                    Намайг сана
                  </label>
                </div>
                <a href="#!">Нүүц үг мартсан?</a>
              </div>
              <div className="text-center lg:text-left">
                <Link href="/login">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="dark"
                  >
                    Нэвтрэх
                  </button>
                </Link>
                <button
                  onClick={onSubmit}
                  type="button"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  Бүртгүүлэх
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
