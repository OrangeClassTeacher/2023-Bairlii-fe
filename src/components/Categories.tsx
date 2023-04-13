import { usePathname, useSearchParams } from "next/navigation";
import { FcDepartment, FcNews, FcOrganization, FcHome, FcFactory, FcNeutralTrading, FcPlanner } from "react-icons/fc";


import CategoryBox from "./CategoryBox";
import { Container } from "./Container";

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
  {
    label: "Хажуу өрөө",
    icon: FcNews,
    description: "This property is close to the beach!",
  },
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

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
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
      </div>
    </Container>
  );
};

export default Categories;
