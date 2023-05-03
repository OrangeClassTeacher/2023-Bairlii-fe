import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";
import jwt from "jsonwebtoken";
import Link from "next/link";

const NewUser = (): JSX.Element => {
  const [decoded, setDecoded] = useState<object | string>();
  const router = useRouter;

  useEffect(() => {
    let localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
  }, []);

  console.log(decoded);

  const SignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center">
      <Dropdown label={decoded?.user?.lastName}>
        <Dropdown.Item>Хэрэглэгчийн хуудас</Dropdown.Item>
        <Link href="/userEdit">
          <Dropdown.Item>Засварлах</Dropdown.Item>
        </Link>
        <Dropdown.Item onClick={SignOut}>Гарах</Dropdown.Item>
      </Dropdown>
      <div>
        <img
          className="rounded-full"
          height="60"
          width="60"
          alt="Avatar"
          src="/images/log.jpg"
        />
      </div>
    </div>
  );
};

export default NewUser;
