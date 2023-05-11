import Link from "next/link";
import { Container } from "./Container";

const Footer = (): JSX.Element => {
  const footerData = {
    Bairlii: "Bairlii",
    Terms: "Terms",
    Siteman: "Siteman",
    Privacy: "Privacy",
    YourPrivacyChoices: "Your Privacy Choices",
    neg: "Asdaad",
    hoyr: "Hoyr",
    guraw: "Guraaw",
  };
  return (
    <div className=" z-10 shadow-sm flex flex-col w-full bg-neutral-100  shadow-inner fixed bottom-0">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-7xl w-full">
          <div>
            <ul className="flex gap-4 p-4">
              <Link href="/">
                <li>{footerData.Bairlii}</li>
              </Link>
              <Link href={"/"}>
                <li>{footerData.Terms}</li>
              </Link>
              <Link href={"#"}>
                <li>{footerData.Siteman}</li>
              </Link>
              <Link href={""}>
                <li>{footerData.Privacy}</li>
              </Link>
              <Link href={""}>
                <li>{footerData.YourPrivacyChoices}</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex gap-4">
              <Link href={""}>
                <li>{footerData.neg}</li>
              </Link>
              <Link href={""}>
                <li>{footerData.hoyr}</li>
              </Link>
              <Link href={""}>
                <li>{footerData.guraw}</li>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
