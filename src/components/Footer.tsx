import Logo from "../components/Logo";

const Footer = (): JSX.Element => {
  const FooterData = {
    Bairlii: "Bairlii",
    Terms: "Terms",
    Siteman: "Siteman",
    Privacy: "Privacy",
    YourPrivacyChoices: "Your Privacy Choices",
  };
  return (
    <div className="bg-white z-10 shadow-sm flex flex-col w-full">
      <div className="flex flex-row items-center justify-between gap-3 md:gap-0 max-w-5xl w-full"></div>
    </div>
  );
};

export default Footer;
