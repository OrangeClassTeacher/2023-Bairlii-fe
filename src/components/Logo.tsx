import { useRouter } from "next/navigation";

const logo = (): JSX.Element => {
  // const router = useRouter();

  return (
    // eslint-disable-next-line @next/next/no-img-element
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
