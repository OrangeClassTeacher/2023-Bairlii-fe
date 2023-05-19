import Ads from "@/components/AddProperty/Ads";
import { Maps } from "@/components/homePageComponents/googleMaps";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [selected, setSelected] = useState<string>("Ads");
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
