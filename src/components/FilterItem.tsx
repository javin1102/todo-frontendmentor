import type { FilterType } from "../types/Filter";

const FilterItem = ({
  isActive,
  changeFilter: setFilter,
  filterValue,
}: {
  isActive?: boolean;
  changeFilter: (filter: FilterType) => void;
  filterValue: FilterType;
}) => {
  return (
    <span
      className={`font-bold ${isActive ? "text-blue-500" : "text-gray-400"} cursor-pointer`}
      onClick={() => {
        setFilter(filterValue);
      }}
    >
      {filterValue.charAt(0).toUpperCase() + filterValue.slice(1)}
    </span>
  );
};
export default FilterItem;
