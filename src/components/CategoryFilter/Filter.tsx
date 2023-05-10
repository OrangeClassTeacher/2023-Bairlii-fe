import Categories from "../CategoryFilter/Categories";

export interface IFilter {
  id: number;
  text: string;
  data: object;
}

const Filter = ({ id, text, data }: IFilter) => {
  const FilterCategories = [
    {
      data: [
        { id: 1, text: "Баянзүрх дүүрэг" },
        { id: 2, text: "Чингэлтэй дүүрэг" },
        { id: 3, text: "ХанУул дүүрэг" },
        { id: 4, text: "Баянгол дүүрэг" },
        { id: 5, text: "Налайх дүүрэг" },
        { id: 6, text: "Сонгинохайрхан дүүрэг" },
      ],
    },
  ];
  return (
    <div>
      {FilterCategories.map((item, index) => (
        <Categories list={item.data} cateFilter={item.text} />
      ))}
    </div>
  );
};
export default Filter;
