import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "flowbite-react";
const NewUser = (): JSX.Element => {
  const [localUser, setLocalUser] = useState<string | null>();
  const router = useRouter;

  useEffect(() => {
    if (typeof window !== undefined) {
      let localStorageValue: string | null = localStorage.getItem("token");
      setLocalUser(localStorageValue);
    }
  }, []);

  const SignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center">
      <Dropdown label="Sign Out">
        <Dropdown.Item>Хэрэглэгчийн хуудас</Dropdown.Item>
        <Dropdown.Item>Засварлах</Dropdown.Item>
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
