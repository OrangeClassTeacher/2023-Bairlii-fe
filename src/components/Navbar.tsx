import { Container } from "../components/Container";
import Logo from "../components/Logo";
import Menu from "../components/Menu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Menu />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
