"use client";
interface img {
  src: string | undefined;
}

import img from "../../public/images/logo.png";
import { useRouter } from "next/navigation";

const logo = (): JSX.Element => {
  const router = useRouter();

  return (
    <img
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="http://d1cs08zudd3ykv.cloudfront.net/dev/img/arrow-up.svg"
    />
  );
};

export default logo;
