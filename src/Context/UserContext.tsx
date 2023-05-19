import React, { useState, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Utils from "@/utils/Utils";

interface LoginProviderProps {
  children: React.ReactNode;
}
interface LoginContextProps {
  userEdit1: string | object;
  Login: () => void;
  setLoginEmail: string | null | object;
  setLoginPassword: string | null | object;
  setEmail: string | object;
  ResetPass: () => void;
  setResetPassword: string | null | object;
  setResetPassword1: string | null | object;
  setLocalUser: string | null | object;
  setDecoded: any;
}

export const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [localUser, setLocalUser] = useState<string | null>();
  const [decoded, setDecoded] = useState<object | string | any>();
  const [userEdit1, setUserEdit1] = useState("");
  const [loginEmail, setLoginEmail] = useState<string | object>();
  const [loginPassword, setLoginPassword] = useState("");
  const [ResetPassword, setResetPassword] = useState("");
  const [ResetPassword1, setResetPassword1] = useState("");
  const [email, setEmail] = useState();


  const route = useRouter();
  const Login = () => {
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
      .catch((error: any) => {
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
        userEdit1,
        Login,
        setLoginEmail,
        setLoginPassword,
        setEmail,
        setResetPassword,
        setResetPassword1,
        setLocalUser,
        setDecoded,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
