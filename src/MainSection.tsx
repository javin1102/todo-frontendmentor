import InputTodo from "./components/InputTodo.tsx";
import ListTodo from "./components/ListTodo.tsx";
import FilterTodo from "./FilterTodo.tsx";

const MainSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 mx-auto leading-5">
      <InputTodo />
      <ListTodo />
      <FilterTodo />
    </div>
  );
};
export default MainSection;
