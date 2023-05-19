import React, { useState, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Utils from "@/utils/Utils";

interface LoginProviderProps {
  children: React.ReactNode;
}
interface LoginContextProps {
  Login: () => void;
}

export const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loginEmail, setLoginEmail] = useState<string | object>();
  const [loginPassword, setLoginPassword] = useState("");



  const route = useRouter();
  const Login = (): void => {
    axios
      .post(`${Utils.API_URL}/user/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then(async (response: any) => {
        localStorage.setItem("token", await response.data.token);
        console.log(localStorage.getItem("token"));
        route.push("/");
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




  return (
    <LoginContext.Provider
      value={{
        Login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
