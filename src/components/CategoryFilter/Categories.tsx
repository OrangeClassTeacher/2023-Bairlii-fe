import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";
import { Container } from "../Container";
import {
  FcDepartment,
  FcNews,
  FcOrganization,
  FcHome,
  FcFactory,
  FcNeutralTrading,
  FcPlanner,
} from "react-icons/fc";
import RoomsNumbers from "./RoomsNumbers";
import Sort from "./Sort";
import { useContext } from "react";
import { TokenContext } from "@/Context/Context";

export const categories = [
  {
    label: "Bayanzurkh District",
    icon: FcDepartment,
    description: "This property is close to the beach!",
  },
  {
    label: "Chingeltei District",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
  {
    label: "Khan-Uul District",
    icon: FcOrganization,
    description: "This property is close to the beach!",
  },
  {
    label: "Bayangol District",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "Sukhbaatar District",
    icon: FcFactory,
    description: "This property is close to the beach!",
  },
  {
    label: "Nalaikh District",
    icon: FcNeutralTrading,
    description: "This property is close to the beach!",
  },
  {
    label: "SonginoKhairkhan District",
    icon: FcPlanner,
    description: "This property is close to the beach!",
  },
  // {
  //   label: "A Side room",
  //   icon: FcNews,
  //   description: "This property is close to the beach!",
  // }
];

export const room = [
  {
    label: "1 room",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "2 rooms",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "3 rooms",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "4 rooms",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
];

export const sorts = [
  {
    label: "Sort by price",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
  {
    label: "Sort by location",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
  {
    label: "Sort by rating",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
];

const Categories = (): JSX.Element | null => {
  const params = useSearchParams();
  const category = params?.get("category");
  const rooms = params?.get("rooms");
  const sort = params?.get("sort");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const { selected } = useContext(TokenContext);

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
        {room.map((item) => (
          <RoomsNumbers
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={rooms === item.label}
          />
        ))}
        {selected === "Ads" ? (sorts.map((item) => (
          <Sort
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={sort === item.label}
          />
        ))) : ("")
        }
      </div>
    </Container>
  );
};

export default Categories;
