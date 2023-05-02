import useRentModal from "@/hooks/useAllModal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import { Search } from "../components/Search";
import Categories from "./Categories";
import Modal from "./modals/Modal";
import RentModal from "./modals/RentModal";
import useAllModal from "@/hooks/useAllModal";
import NewUser from "./user/newUser";

const Navbar = (): JSX.Element => {
  const [localUser, setLocalUser] = useState<string | null>();

  useEffect(() => {
    if (typeof window !== undefined) {
      let localStorageValue: string | null = localStorage.getItem("token");
      setLocalUser(localStorageValue);
    }
  }, []);

  const router = useRouter();
  const rentModal = useAllModal();
  // console.log({ rentModal });

  // const [openModal, setModal] = useState(false);
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search handleChange={undefined} />
            <button
              onClick={rentModal.isOpen ? rentModal.onClose : rentModal.onOpen}
            >
              AdList
            </button>
            {localUser ? <NewUser /> : <Menu />}
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
