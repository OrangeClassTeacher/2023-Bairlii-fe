import Image from "next/image";
import Link from "next/link";

const Avatar = (): JSX.Element => {
  return (
    <Link href="/login">
      <Image
        className="rounded-full"
        height={60}
        width={60}
        alt="Avatar"
        src="/DevZoid.png"
      />
    </Link>
  );
};
export default Avatar;
