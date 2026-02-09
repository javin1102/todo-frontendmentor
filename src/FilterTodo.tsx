import TodoBox from "./components/TodoBox.tsx";
import FilterItem from "./components/FilterItem.tsx";
import { useTodos } from "./custom-hooks/useTodos.tsx";
import { Filter } from "./types/Filter.ts";

const FilterTodo = () => {
  console.log("Rendering FilterTodo");
  const { changeFilter, filter } = useTodos();

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
