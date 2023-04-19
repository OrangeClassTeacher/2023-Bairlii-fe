import img from "../../public/images/logo.png";

const Avatar = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-full"
      height="60"
      width="60"
      alt="Avatar"
      src="/images/DevZoid.png"
    />
  );
};
export default Avatar;
