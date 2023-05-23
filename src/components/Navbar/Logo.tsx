import Image from "next/image";
const logo = (): JSX.Element => (
  <Image
    alt="logo"
    className="hidden md:block cursor-pointer -ms-10"
    height={50}
    width={190}
    src="/images/DevZoid.png"
    onClick={(): string => (window.location.href = "/")}
  />
);

export default logo;
