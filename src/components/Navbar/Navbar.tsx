import useRentModal from "@/hooks/useAllModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import { Search } from "./Search";
import Categories from "../CategoryFilter/Categories";
import Modal from "../modals/Modal";
import RentModal from "../modals/RentModal";
import useAllModal from "@/hooks/useAllModal";
import NewUser from "../user/newUser";
import { LoginContext } from "../../Context/UserContext";
import { useContext } from "react";

const Navbar = (): JSX.Element => {
  const { Login } = useContext(LoginContext);
  const [localUser, setLocalUser] = useState<string | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      let localStorageValue: string | null = localStorage.getItem("token");
      setLocalUser(localStorageValue);
    }
  }, [Login]);

  const router = useRouter();
  const rentModal = useAllModal();

  // const [openModal, setModal] = useState(false);
  return (
    <div className="bg-white z-10 shadow-sm flex flex-col w-full">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-5xl w-full">
          <Logo />
          <Search handleChange={undefined} />
          {localUser ? <NewUser /> : <Menu />}
        </div>
      </Container>
      <Categories />
    </div>
  );
};

export default Navbar;
