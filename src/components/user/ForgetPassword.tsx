import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Utils from "@/utils/Utils";

function ForgetPassword(): JSX.Element {
  const [email, setEmail] = useState();


  const route = useRouter();
  const onChangeEmail = (e: any): void => {
    setEmail(e.target.value);
  };
  const ForgetPass = (): void => {
    axios
      .post(`${Utils.API_URL}/user/forgotPassword`, {
        email: email,
      })
      .then(() => {
        alert("Имэйл хаяг зөв байна");
        route.push("/login/resetPass");
      })
      .catch(() => {
        alert("Бүртгэлгүй имэйл байна");
      });
  };

  const onSubmit = (): void => {
    ForgetPass();
  };

  return (
    <section className="h-screen">
      <div className="h-full">
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
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div className="relative w-[380px] h-[420px]  rounded-lg overflow-hidden">
              <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-600 via-blue-600 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right" />
              <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-600 via-blue-600 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right" />
              <div className="absolute inset-1 bg-blue-200 rounded-lg z-10 p-5">
                <form>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                      Нууц үг сэргээх
                    </p>
                  </div>
                  <div className="mt-5">
                    <label>Нэвтрэх нэр</label>
                    <input
                      onChange={onChangeEmail}
                      type="text"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-10 text-center lg:text-left">
                    <button
                      onClick={onSubmit}
                      type="button"
                      className="inline-block items-center rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="dark"
                    >
                      Шалгах
                    </button>
                    <Link href={"/login"}>
                      <button
                        type="button"
                        className="inline-block items-center rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="dark"
                      >
                        Буцах
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
