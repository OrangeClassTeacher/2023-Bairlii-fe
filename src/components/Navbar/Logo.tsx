import Image from "next/image";
const logo = (): JSX.Element => (
  <Image
    alt="logo"
    className="hidden md:block cursor-pointer -ms-10"
    height={60}
    width={230}
    src="/images/DevZoid.png"
    onClick={() => (window.location.href = "/")}
  />
)

export default logo;
