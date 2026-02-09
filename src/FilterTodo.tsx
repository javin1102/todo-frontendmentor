import TodoBox from "./components/TodoBox.tsx";
import FilterItem from "./components/FilterItem.tsx";
import { Filter } from "./types/Filter.ts";
import useFilter from "./custom-hooks/useFilter.tsx";

const FilterTodo = () => {
  console.log("Rendering FilterTodo");
  const { filter, changeFilter } = useFilter();
  return (
    <TodoBox className="justify-center gap-8 rounded-sm">
      {Object.values(Filter).map((filterValue) => (
        <FilterItem
          key={filterValue}
          isActive={filter === filterValue}
          changeFilter={changeFilter}
          filterValue={filterValue}
        ></FilterItem>
      ))}
    </TodoBox>
  );
};
export default FilterTodo;
