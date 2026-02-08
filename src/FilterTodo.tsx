import TodoBox from "./components/TodoBox.tsx";
import FilterItem from "./components/FilterItem.tsx";

const FilterTodo = () => {
  console.log("Rendering FilterTodo");
  return (
    <TodoBox className="justify-center gap-8">
      <FilterItem>All</FilterItem>
      <FilterItem>Active</FilterItem>
      <FilterItem>Completed</FilterItem>
    </TodoBox>
  );
};
export default FilterTodo;
