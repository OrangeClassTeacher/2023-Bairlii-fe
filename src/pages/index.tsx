import Ads from "@/components/AddProperty/Ads";
import { Maps } from "@/components/homePageComponents/googleMaps";
import { useContext } from "react";
import { TokenContext } from "@/Context/Context";

export default function Home(): JSX.Element {
  const { selected, setSelected } = useContext(TokenContext);

  return (
    <div className="flex w-full justify-center">
      {selected === "Ads" ? (
        <Ads setSelected={setSelected} />
      ) : selected === "Maps" ? (
        <Maps setSelected={setSelected} />
      ) : (
        <>404 not found</>
      )}
    </div>
  );
}
