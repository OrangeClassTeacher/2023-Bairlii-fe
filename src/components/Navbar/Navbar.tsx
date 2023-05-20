import { useEffect, useState } from "react";
import { Container } from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Categories from "../CategoryFilter/Categories";
import NewUser from "../user/newUser";
import { useContext } from "react";
import { TokenContext } from "@/Context/Context";

const Navbar = (): JSX.Element => {
  const { message } = useContext(TokenContext);
  const [localUser, setLocalUser] = useState<string | null>();

  useEffect(() => {
    const token = typeof window !== undefined ? localStorage.getItem("token") : ""
    setLocalUser(token);
  }, [message]);

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
