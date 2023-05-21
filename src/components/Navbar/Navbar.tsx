import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Categories from "../CategoryFilter/Categories";
import useAllModal from "@/hooks/useAllModal";
import NewUser from "../user/newUser";
import { LoginContext } from "../../Context/UserContext";
import { useContext } from "react";

const Navbar = (): JSX.Element => {
  const { Login } = useContext(LoginContext);
  const [localUser, setLocalUser] = useState<string | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      const localStorageValue: string | null = localStorage.getItem("token");
      setLocalUser(localStorageValue);
    }
  }, [Login]);

  return (
    <div className="bg-white z-10 shadow-sm flex flex-col w-full">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-7xl w-full">
          <Logo />
          {localUser ? <NewUser /> : <Menu />}
        </div>
      </Container>
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-7xl w-full">
          {" "}
          <Categories />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
