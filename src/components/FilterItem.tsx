import React from "react";
import type { FilterType } from "../types/Filter";

const FilterItem = ({
  isActive,
  changeFilter,
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
        changeFilter(filterValue);
      }}
    >
      {filterValue.charAt(0).toUpperCase() + filterValue.slice(1)}
    </span>
  );
};
export default React.memo(FilterItem);
