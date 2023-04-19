import img from "../../public/images/logo.png";
import Link from "next/link";

const Avatar = () => {
  return (
    <Link href="/register">
      <img
        className="rounded-full"
        height="60"
        width="60"
        alt="Avatar"
        src="/images/DevZoid.png"
      />
    </Link>
  );
};
export default Avatar;
