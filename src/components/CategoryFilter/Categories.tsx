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

export const categories = [
  {
    label: "Баянзүрх дүүрэг",
    icon: FcDepartment,
    description: "This property is close to the beach!",
  },
  {
    label: "Чингэлтэй дүүрэг",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
  {
    label: "ХанУул дүүрэг",
    icon: FcOrganization,
    description: "This property is close to the beach!",
  },
  {
    label: "Баянгол дүүрэг",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "Сүхбаатар дүүрэг",
    icon: FcFactory,
    description: "This property is close to the beach!",
  },
  {
    label: "Налайх дүүрэг",
    icon: FcNeutralTrading,
    description: "This property is close to the beach!",
  },
  {
    label: "Сонгинохайрхан дүүрэг",
    icon: FcPlanner,
    description: "This property is close to the beach!",
  },
  {
    label: "Хажуу өрөө",
    icon: FcNews,
    description: "This property is close to the beach!",
  }
];

export const room = [
  {
    label: "1 өрөө",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "2 өрөө",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "3 өрөө",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
  {
    label: "4 өрөө",
    icon: FcHome,
    description: "This property is close to the beach!",
  },
];

export const sorts = [
  {
    label: "Үнээр шүүх",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
  {
    label: "Байршилаар шүүх",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
  {
    label: "Rating шүүх",
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
        {sorts.map((item) => (
          <Sort
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={sort === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
