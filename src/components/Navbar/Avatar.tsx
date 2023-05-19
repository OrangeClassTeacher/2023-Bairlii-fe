import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  return (
    <Link href="/login">
      <Image
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
