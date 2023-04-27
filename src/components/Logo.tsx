import { useRouter } from "next/navigation";

const logo = (): JSX.Element => {
  // const router = useRouter();

  return (
    <img
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="images/DevZoid.png"
    />
  );
};

export default logo;
