import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Utils from "@/utils/Utils";
import axios from "axios";

function ResetPassword(): JSX.Element {
  // const { ResetPass, setResetPassword, setResetPassword1 } =
  //   useContext(LoginContext);
  const [ResetPassword, setResetPassword] = useState("");
  const [ResetPassword1, setResetPassword1] = useState("");

  const route = useRouter();

  const onChangeResetPass = (e: any): void => {
    setResetPassword(e.target.value);
  };
  const onChangeResetPass1 = (e: any): void => {
    setResetPassword1(e.target.value);
  };
  const ResetPass = (): void => {
    if (ResetPassword == ResetPassword1) {
      axios
        .post(`${Utils.API_URL}/user/resetPassword`, {
          // email: query geer mail ee damjuulaad avchii egchee,
          password: ResetPassword,
          ResetPassword1: ResetPassword1,
        })
        .then(() => {
          //энд response оо шалгаад  хариугаа буцаана
          // alert("бүртгэлтэй имэйл биш байна");

          route.push("/login");
          toast.success("🦄 Нууц үг амжилттай солигдлоо", {
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
          toast.error("🦄🦄  нууц үг таарахгүй байна", {
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
    } else {
      alert("2 нууц үг таарахгүй байна");
    }
  };
  const onSubmit = (): void => {
    ResetPass();
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6  mt-7 max-w-7xl w-full mb-20  justify-between mt-28">
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
                      Reset Password
                    </p>
                  </div>
                  <div className="mt-5">
                    <label>Password</label>
                    <input
                      onChange={onChangeResetPass}
                      type="password"
                      className="border border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <label>Password confirm</label>
                    <input
                      onChange={onChangeResetPass1}
                      type="password"
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
                      Change
                    </button>
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

export default ResetPassword;
