import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";

function Register(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      district: "",
      subdistrict: "",
      street: "",
      block: "",
      password: "",
      phoneNumber: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<object>({ profilePicture: [] });
  const route = useRouter();

  const sendFile = async (fieldName: any, files: any): Promise<void> => {
    setLoading(true);

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
    if (fieldName == "images") {
      setProfile({ ...profile, profilePicture: arr[0] });
    }
    setLoading(false);
  };
  console.log(errors);

  const onSubmit = (data: any): void => {
    const reqBody = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: {
        district: data.district,
        subdistrict: +data.subdistrict,
        street: data.street,
        block: +data.block,
      },
      password: data.password,
      phoneNumber: data.phoneNumber,
      ...profile,
    };

    axios
      .post(`http://localhost:9000/api/users`, reqBody)
      .then((response: any) => {
        console.log(response);
        route.push("/login");
        toast.success("🦄Таны бүртгэл амжилттай үүслээ", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(() => {
        toast.error("🦄 Бүртгэл амжилтгүй боллоо", {
          position: "bottom-right",
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

  return (
    <div className="h-screen">
      <div className="h-full max-w-7xl">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Image
              height={1000}
              width={1000}
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <form
            onSubmit={(event): Promise<void> => handleSubmit(onSubmit)(event)}
            className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
          >
            <div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                  Шинээр бүртгүүлэх
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Нэр</label>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    type="text"
                    {...register("firstName", {
                      required: true,
                      maxLength: 40,
                    })}
                  />

                  {errors.firstName && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      First Name required
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Овог</label>
                  <input
                    className="border border-gray-400 py-1 px-2 w-full"
                    {...register("lastName", {
                      required: true,
                      maxLength: 40,
                    })}
                    type="text"
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Last Name required
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <label>Имэйл</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  type="text"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
                {errors.email && (
                  <div className="invalid-feedback text-red-500 text-xs">
                    E-Mail required
                  </div>
                )}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <label>Дүүрэг</label>
                  <select
                    {...register("district", {
                      required: true,
                      // value:
                      //   "Баянзүрх дүүрэг" ||
                      //   "Баянгол дүүрэг" ||
                      //   "Сүхбаатар дүүрэг" ||
                      //   "Чингэлтэй дүүрэг" ||
                      //   "Налайх дүүрэг" ||
                      //   "Хан-Уул дүүрэг" ||
                      //   "Хан-Уул дүүрэг" ||
                      //   "Сонгинохайрхан дүүрэг",
                    })}
                    className="border border-gray-400 py-1 px-2 w-full"
                  >
                    <option value="" />
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
                  {errors.district && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Address required
                    </div>
                  )}
                </div>
                <div>
                  <label>Хороо</label>
                  <select
                    {...register("subdistrict", {
                      required: true,
                      // value: "1" || "2" || "3" || "4" || "5" || "6" || "7",
                    })}
                    className="border border-gray-400 py-1 px-2 w-full"
                  >
                    <option value="" />
                    <option value="1">1-р хороо</option>
                    <option value="2">2-р хороо</option>
                    <option value="3">3-р хороо</option>
                    <option value="4">4-р хороо</option>
                    <option value="5">5-р хороо</option>
                    <option value="6">6-р хороо</option>
                    <option value="7">7-р хороо</option>
                  </select>
                  {errors.subdistrict && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Address required
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Гудамж</label>
                  <input
                    {...register("street", {
                      required: true,
                      maxLength: 40,
                    })}
                    className="border border-gray-400 py-1 px-2"
                  />
                  {errors.street && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Address required
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Байр</label>
                  <input
                    {...register("block", { required: true })}
                    type="number"
                    className="border border-gray-400 py-1 px-2"
                  />
                  {errors.block && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Address required
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label>Нууц үг</label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 4,
                    })}
                    type="password"
                    className="border border-gray-400 py-1 px-2"
                  />
                  {errors.password && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Password required
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Утасны дугаар</label>
                  <input
                    {...register("phoneNumber", {
                      required: true,
                      minLength: 8,
                      maxLength: 8,
                    })}
                    type="number"
                    className="border border-gray-400 py-1 px-2"
                  />
                  {errors.phoneNumber && (
                    <div className="invalid-feedback text-red-500 text-xs">
                      Password required
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 mb-5">
                <label>Профайл зураг</label>
                <input
                  onChange={(e): void => {
                    sendFile("images", e.target.files);
                  }}
                  type="file"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
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
                  // onClick={onSubmit}
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="dark"
                >
                  Бүртгүүлэх
                </button>
                <button
                  onClick={(): void => reset()}
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
    </div>
  );
}

export default Register;
