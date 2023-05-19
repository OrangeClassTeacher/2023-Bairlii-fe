import React, { useState, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Utils from "@/utils/Utils";

interface LoginProviderProps {
  children: React.ReactNode;
}
interface LoginContextProps {
  userEdit1: string;
  Login: () => void;
  setLoginEmail: string | null | object;
  setLoginPassword: string | null | object;
  setEmail: string | null | object;
  ForgetPass: () => void;
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
  const [loginEmail, setLoginEmail] = useState<string | null | object>();
  const [loginPassword, setLoginPassword] = useState("");
  const [ResetPassword, setResetPassword] = useState("");
  const [ResetPassword1, setResetPassword1] = useState("");
  const [email, setEmail] = useState("");


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

  const ForgetPass = () => {
    const usernameRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    if (usernameRegex.test(email)) {
      axios
        .post(`http://localhost:9000/api/user/forgotPassword`, {
          email: email,
        })
        .then(async (response: any) => {
          alert("Имэйл хаяг зөв байна");
          console.log(response);
          route.push("/login/resetPass");
        })
        .catch((err) => {
          alert("Бүртгэлгүй имэйл байна");
        });
    } else alert("Имэйл хаягаа зөв оруулна уу!!!");
  };

  const ResetPass = () => {
    const usernameRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    console.log(ResetPassword, ResetPassword1, email);
    if (ResetPassword == ResetPassword1) {
      if (usernameRegex.test(email)) {
        axios
          .post(`${Utils.API_URL}/user/resetPassword`, {
            email: email,
            password: ResetPassword,
            ResetPassword1: ResetPassword1,
          })
          .then(async (response: any) => {
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
          .catch((err) => {
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
        alert("бүртгэлтэй имэйл биш байна");
      }
    } else {
      alert("2 нууц үг таарахгүй байна");
    }
  };
  return (
    <LoginContext.Provider
      value={{
        userEdit1,
        Login,
        setLoginEmail,
        setLoginPassword,
        setEmail,
        ForgetPass,
        ResetPass,
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
