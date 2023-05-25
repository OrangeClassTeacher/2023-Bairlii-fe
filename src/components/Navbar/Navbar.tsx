import { useEffect, useState } from "react";
import { Container } from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Categories from "../CategoryFilter/Categories";
import NewUser from "../user/newUser";
import { useContext } from "react";
import { TokenContext } from "@/Context/Context";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  const { message } = useContext(TokenContext);
  const [localUser, setLocalUser] = useState<string | null>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    setLocalUser(token);
  }, [message]);

  return (
    <div className="bg-white z-10 shadow-sm flex flex-col w-full">
      <div className="">
        <Container>
          <div className="flex justify-between ps-2 pe-2 sm:justify-between lg:justify-between items-center xl:justify-between gap-3 md:gap-0 max-w-7xl w-full ">
            <div>
              <Logo />
            </div>
            <div className="flex justify-between w-[250px]">
              <div className="leading-10">
                <Link href={"/"} className="home">
                  <span className="hover-underline-animation">HOME</span>
                </Link>
              </div>
              <div>{localUser ? <NewUser /> : <Menu />}</div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-7xl w-full overflow-x-auto">
          {" "}
          <Categories />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
