import React, { useState, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

interface LoginProviderProps {
  children: React.ReactNode;
}
export const LoginContext = createContext({
  setUserEdit1: (userEdit1: "") => {},
  userEdit1: {},
  Login: () => {},
  setLoginEmail: (loginEmail: "") => {},
  setLoginPassword: (loginPassword: "") => {},
});
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [decoded, setDecoded] = useState<object | string | any>();
  const [userEdit1, setUserEdit1] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const route = useRouter();
  const Login = () => {
    axios
      .post(`http://localhost:9000/api/userlogin`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then(async (response: any) => {
        localStorage.setItem("token", await response.data.token);
        console.log(localStorage.getItem("token"));

        alert("Та амжилттай нэвтэрлээ");
        route.push("/");
      })
      .catch((error: any) => console.log("error", error));
  };

  return (
    <LoginContext.Provider
      value={{
        setUserEdit1,
        userEdit1,
        Login,
        setLoginEmail,
        setLoginPassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
