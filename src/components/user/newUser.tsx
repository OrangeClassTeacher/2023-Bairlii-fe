import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";
import jwt from "jsonwebtoken";
import Link from "next/link";
import useAllModal from "@/hooks/useAllModal";
import { LoginContext } from "../../Context/UserContext";
import { useContext } from "react";

const NewUser = (): JSX.Element => {
  const [decoded, setDecoded] = useState<object | string | any>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter;
  const rentModal = useAllModal();
  const { userEdit1 } = useContext(LoginContext);

  useEffect(() => {
    let localStorageValue: string = localStorage.getItem("token") || "";
    setDecoded(jwt.decode(localStorageValue) || "");
    // console.log(".......data", userEdit1);

    setLoading(false);
    const secretToken: string | null = process.env.TOKEN_KEY || "";
  }, []);

  const SignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  if (loading) {
    return <div>loading ...</div>;
  } else {
    return (
      <div className="flex items-center">
        {/* <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={rentModal.isOpen ? rentModal.onClose : rentModal.onOpen}
        >
          Your Home
        </div> */}
        <Dropdown
          label={
            userEdit1.result
              ? userEdit1.result?.firstName
              : decoded.user.firstName
          }
        >
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
            alt="log"
            src="/images/log.jpg"
          />
        </div>
      </div>
    );
  }
};
export default NewUser;
