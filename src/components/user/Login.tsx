import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi";
import Image from "next/image";
import { toast } from "react-toastify";
import Utils from "@/utils/Utils";
import { TokenContext } from "@/Context/Context";

function Login(): JSX.Element {
  // const { Login, setLoginEmail, setLoginPassword } = useContext(LoginContext);
  const [loginEmail, setLoginEmail] = useState<string | object>();
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const route = useRouter();
  const { setMessage } = useContext(TokenContext);

  const onChangeEmail = (e: any): void => {
    setLoginEmail(e.target.value);
  };
  const onChangeLoginPass = (e: any): void => {
    setLoginPassword(e.target.value);
  };
  const Login = (): void => {
    axios
      .post(`${Utils.API_URL}/user/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then(async (response: any) => {
        localStorage.setItem("token", await response.data.token);
        setMessage(response.data.token);
        route.push("/", undefined, { shallow: false });
        toast.success("🦄Та амжилттай нэвтэрлээ", {
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
        toast.error("🦄 Нэвтрэх нэр, нууц үг буруу байна", {
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

  const onSubmit = (): void => {
    Login();
  };

  const togglePassword = (e: any): void => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
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
                      Нэвтрэх
                    </p>
                  </div>

                  <div className="mt-5">
                    <label>Имэйл</label>

                    <input
                      onChange={onChangeEmail}
                      type="text"
                      className="border border-gray-400  py-1 w-full "
                      id="loginEmail"
                    />
                  </div>
                  <div className="mt-5">
                    <label>Нууц үг</label>
                    <div className="border border-gray-400 w-full bg-white flex justify-between">
                      <input
                        onChange={onChangeLoginPass}
                        type={passwordType}
                        className="border-0 py-1 w-[90%]"
                        id="loginPassword"
                      />
                      <button onClick={togglePassword} className="pr-4">
                        {passwordType === "password" ? <BiShow /> : <BiHide />}
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 mb-6 flex items-center justify-between">
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
                    <Link href={"/login/forgetPass"}>
                      <span>Нүүц үг мартсан?</span>
                    </Link>
                  </div>
                  <div className="text-center lg:text-left">
                    <button
                      onClick={onSubmit}
                      type="button"
                      className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="dark"
                    >
                      Нэвтрэх
                    </button>
                    <Link href="/login/register">
                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init
                        data-te-ripple-color="dark"
                      >
                        Бүртгүүлэх
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

export default Login;
