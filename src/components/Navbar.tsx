import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../components/Container";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import { Search } from "../components/Search";
import Categories from "./Categories";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search handleChange={undefined} />
            <button type="button" onClick={() => router.push("/addlist")}>
              addlist
            </button>
            <Menu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default Navbar;
