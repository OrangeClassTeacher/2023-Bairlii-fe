import React, { useState, createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface LoginProviderProps {
  children: React.ReactNode;
}
export const LoginContext = createContext({
  setUserEdit1: (userEdit1: "") => { },
  userEdit1: "",
  Login: () => { },
  setLoginEmail: (loginEmail: "") => { },
  setLoginPassword: (loginPassword: "") => { },
  ForgetPass: () => { },
  setEmail: (email: "") => { },
  ResetPass: () => { },
  setResetPassword: (ResetPassword: "") => { },
  setResetPassword1: (ResetPassword1: "") => { },
});
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [decoded, setDecoded] = useState<object | string | any>();
  const [userEdit1, setUserEdit1] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [ResetPassword, setResetPassword] = useState("");
  const [ResetPassword1, setResetPassword1] = useState("");
  const [email, setEmail] = useState("");

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
        console.log(response);

        alert("Та амжилттай нэвтэрлээ");
        route.push("/");
      })
      .catch((error: any) => console.log("error", error));
  };

  const ForgetPass = () => {
    const usernameRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    if (!usernameRegex.test(email)) {
      alert("Имэйл хаягаа зөв оруулна уу!!!");
    }
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

  };

  const ResetPass = () => {
    const usernameRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    console.log(ResetPassword, ResetPassword1, email);
    if (ResetPassword == ResetPassword1) {
      if (usernameRegex.test(email)) {
        axios
          .post(`http://localhost:9000/api/user/resetPassword`, {
            email: email,
            password: ResetPassword,
            ResetPassword1: ResetPassword1,
          })
          .then(async (response: any) => {
            console.log(response);
            alert("Нууц үг амжилттай солигдлоо");
            route.push("/login");
          })
          .catch((err) => {
            alert(err);
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
        setUserEdit1,
        userEdit1,
        Login,
        setLoginEmail,
        setLoginPassword,
        setEmail,
        ForgetPass,
        ResetPass,
        setResetPassword,
        setResetPassword1,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
