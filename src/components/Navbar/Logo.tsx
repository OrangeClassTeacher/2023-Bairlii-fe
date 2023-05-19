import { useRouter } from "next/navigation";
import Image from "next/image";
const logo = (): JSX.Element => {
  // const router = useRouter();

  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/DevZoid.png"
      onClick={() => (window.location.href = "/")}
    />
  );
};

export default logo;
