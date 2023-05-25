import { useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import jwt from "jsonwebtoken";
import Link from "next/link";
import Loading from "../loading/Loading";

const NewUser = (): JSX.Element => {
  const [decoded, setDecoded] = useState<object | string | any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");

    setLoading(false);
  }, []);

  const SignOut = (): void => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex items-center">
        <div>
          {" "}
          <img
            src={decoded?.user?.profilePicture}
            alt="profilePicture"
            className="rounded-full h-11 w-11 flex items-center justify-center me-2"
          />
        </div>

        <Dropdown className="" label={decoded.user.firstName}>
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
      </div>
    );
  }
};
export default NewUser;
