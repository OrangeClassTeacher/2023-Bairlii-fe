import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { LoginContext } from "../../Context/UserContext";
import { useContext } from "react";
import Image from "next/image";

const NewUser = (): JSX.Element => {
  const [decoded, setDecoded] = useState<object | string | any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { userEdit1 } = useContext(LoginContext);

  useEffect(() => {
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    // console.log(".......data", userEdit1);

    setLoading(false);
    const secretToken: string | null = process.env.TOKEN_KEY || "";
  }, []);

  const SignOut = (): void => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  if (loading) {
    return <div>loading ...</div>;
  } else {
    return (
      <div className="flex items-center">
        <Dropdown label={decoded.user.firstName}>
          <Link
            href={{
              pathname: `/properties/[userId]`,
              query: {
                userId: decoded?.user?._id,
              },
            }}
          >
            <Dropdown.Item>My Properties</Dropdown.Item>
          </Link>
          <Link
            href={{
              pathname: `/advertisements/[userId]`,
              query: {
                userId: decoded?.user?._id,
              },
            }}
          >
            <Dropdown.Item>My Advertisements</Dropdown.Item>
          </Link>
          <Link href="/userEdit">
            <Dropdown.Item>Edit profile</Dropdown.Item>
          </Link>
          <Dropdown.Item onClick={SignOut}>Log Out</Dropdown.Item>
        </Dropdown>
        <div>
          <Image
            className="rounded-full"
            height="60"
            width="60"
            alt="log"
            src="/images/log.jpg"
          />
        </div>
      </div>
    );
  }
};
export default NewUser;
