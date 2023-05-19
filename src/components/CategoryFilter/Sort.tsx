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

const Sort: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}): JSX.Element => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      sort: label,
    };

    if (params?.get("sort") === label) {
      delete updatedQuery.sort;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div className="flex flex-col justify-between">
      <span className="radio-tile">
        <span className="radio-icon">
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
            <p className="font-medium text-sm">{label}</p>
          </div>
        </span>
      </span>
    </div>
  );
};

export default Sort;