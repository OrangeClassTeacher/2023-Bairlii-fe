import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

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
}

function Register() {
  console.log("onchange2");
  const myUserObj = Yup.object().shape({
    firstName: Yup.string().required("Нэр оруулна уу") || "",
    lastName: Yup.string().required("Овог оруулна уу") || "",
    email: Yup.string()
      .required("Имэйл хаягаа оруулна уу")
      .email("Имэйл буруу байна"),
    address: Yup.object().shape({
      district: Yup.string().required("Дүүрэг сонгоно уу"),
      subdistrict: Yup.string().required("Хороо сонгоно уу"),
      street: Yup.string().required("Гудамжын нэрээ оруулна уу"),
      block: Yup.string().required("Байрны дугаараа оруулна уу"),
      fence: Yup.number().required("Хашааны дугаараа оруулна уу"),
    }),
    password: Yup.string()
      .min(6, "Нууц үгээ оруулна уу")
      .max(10, "Хамгийн уртдаа 10 тэмдэгт байна")
      .required("Нууц үгээ оруулна уу"),

    profilePicture: Yup.string().required("Зурагаа оруулна уу"),
    phoneNumber: Yup.string()
      .min(8, "Утасны дугаар 8 оронтой байх ёстой")
      .max(8, "Утасны дугаар 8 оронтой байх ёстой")
      .required("Утасны дугаараа оруулна уу"),
  });
  const formOptions = { resolver: yupResolver(myUserObj) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit1(data: any) {
    console.log({ formState });

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }
  const [loading, setLoading] = useState<Boolean>(false);
  const [newUser, setNewUser] = useState<IUsers>(myUserObj);

  const userInit: IUsers = {
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
  };

  const lala = {
    hello: "hello",
  };

  const onChangeFN = (e: any) => {
    setNewUser({ ...newUser, firstName: e.target.value });
    register("firstName");
    console.log("onchange1");
  };
  const onChangeLN = (e: any) => {
    setNewUser({ ...newUser, lastName: e.target.value });
    register("lastName");
  };
  const onChangeEmail = (e: any) => {
    setNewUser({ ...newUser, email: e.target.value });
    register("email");
  };
  const onChangeDistrict = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, district: e.target.value },
    });
    register("address.district");
  };
  const onChangeSubDistrict = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, subdistrict: e.target.value },
    });
    register("address.subdistrict");
  };
  const onChangeStreet = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, street: e.target.value },
    });
    register("address.street");
  };
  const onChangeBlock = (e: any) => {
    setNewUser({
      ...newUser,
      address: { ...newUser.address, block: e.target.value },
    });
    register("address.block");
  };
  const onChangePassword = (e: any) => {
    setNewUser({ ...newUser, password: e.target.value });
  };
  register("password");
  const onChangePhone = (e: any) => {
    setNewUser({ ...newUser, phoneNumber: e.target.value });
  };
  register("phoneNumber");

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
    axios
      .post(`http://localhost:9000/api/users`, newUser)
      .then((response: any) => {
        console.log(response);

        alert("Таны бүртгэл амжилттай үүслээ");
        setNewUser(userInit);
      })
      .catch((error: any) => console.log("error", error));
  };

  return (
    <div className="h-screen">
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit1)}
          className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
        >
          <div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                Шинээр бүртгүүлэх
              </p>
            </div>
            <form className="mt-10 grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label>Нэр</label>
                <input
                  className="border border-gray-400 py-1 px-2 w-full"
                  //  onChange={onChangeFN}
                  type="text"
                  {...register("firstName")}
                />
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="flex flex-col">
                <label>Овог</label>
                <input
                  className="border border-gray-400 py-1 px-2 w-full"
                  onChange={onChangeLN}
                  type="text"
                />
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.lastName?.message}
                </div>
              </div>
            </form>
            <div className="mt-5">
              <label>Имэйл</label>
              <input
                id="border border-gray-400 py-1 px-2 w-full"
                onChange={onChangeEmail}
                type="text"
                className="border border-gray-400 py-1 px-2 w-full"
              />
              <div className="invalid-feedback text-red-500 text-xs">
                {errors.email?.message}
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div>
                <label>Дүүрэг</label>
                <select
                  onChange={onChangeDistrict}
                  className="border border-gray-400 py-1 px-2 w-full"
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
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.address?.district?.message}
                </div>
              </div>
              <div>
                <label>Хороо</label>
                <select
                  onChange={onChangeSubDistrict}
                  className="border border-gray-400 py-1 px-2 w-full"
                >
                  <option value=""></option>
                  <option value="horoo">1-р хороо</option>
                  <option value="horoo">2-р хороо</option>
                  <option value="horoo">3-р хороо</option>
                  <option value="horoo">4-р хороо</option>
                  <option value="horoo">5-р хороо</option>
                  <option value="horoo">6-р хороо</option>
                  <option value="horoo">7-р хороо</option>
                </select>
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.address?.subdistrict?.message}
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label>Гудамж</label>
                <input
                  onChange={onChangeStreet}
                  className="border border-gray-400 py-1 px-2"
                />
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.address?.street?.message}
                </div>
              </div>
              <div className="flex flex-col">
                <label>Байр</label>
                <input
                  onChange={onChangeBlock}
                  type="number"
                  className="border border-gray-400 py-1 px-2"
                />
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.address?.block?.message}
                </div>
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
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.password?.message}
                </div>
              </div>
              <div className="flex flex-col">
                <label>Утасны дугаар</label>
                <input
                  onChange={onChangePhone}
                  type="number"
                  className="border border-gray-400 py-1 px-2"
                />
                <div className="invalid-feedback text-red-500 text-xs">
                  {errors.phoneNumber?.message}
                </div>
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
              <div className="invalid-feedback text-red-500 text-xs">
                {errors.profilePicture?.message}
              </div>
              <span> {loading && "Uploading..."}</span>
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
                type="submit"
                className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="dark"
              >
                Бүртгүүлэх
              </button>
              <button
                onClick={() => reset()}
                type="button"
                className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="dark"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
