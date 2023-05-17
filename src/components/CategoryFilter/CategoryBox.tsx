import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import axios from "axios";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    axios
      .post(`http://localhost:9000/api/advertisement/filter/price`)
      .then(async (response: any) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;

// interface FilteredData {
//   filteredPricelow: number;
//   filteredPriceHigh: number;
//   filteredAreaLow: number;
//   filteredAreaHigh: number;
//   roomFilterLow: number;
//   roomFilterHigh: number;
// }

// const handleCategoryClick = async (value: number) => {
//   const filteredData: FilteredData = {
//     filteredPricelow: 0,
//     filteredPriceHigh: 0,
//     filteredAreaLow: 0,
//     filteredAreaHigh: 0,
//     roomFilterLow: 0,
//     roomFilterHigh: 0,
//   };

//   try {
//     const response = await axios.post(
//       http://localhost:9000/api/advertisement/filter/price/${value},
//       {
//         filteredData,
//       }
//     );
//     console.log(filteredData);

//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// interface CategoryBoxProps {
//   icon: React.ComponentType;
//   label: string;
//   selected?: boolean;
//   value: number;
// }

// const CategoryBox: React.FC<CategoryBoxProps> = ({
//   icon: Icon,
//   label,
//   selected,
//   value,
// }) => {
//   const handleClick = () => {
//     handleCategoryClick(value);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`rounded-xl border-2 p-4 flex gap-3 hover:border-black transition cursor-pointer ${
//         selected ? "border-black" : "border-neutral-200"
//       }`}
//     >
//       <Icon size={30} />
//       <div className="font-semibold">{label}</div>
//     </div>
//   );
// };

// export default CategoryBox;
