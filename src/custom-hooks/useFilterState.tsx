import { useState } from "react";
import type { FilterType } from "../types/Filter";

const useFilterState = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const changeFilter = (newFilter: FilterType) => {
    setFilter(newFilter);
  };
  return { filter, changeFilter };
};

export default useFilterState;
