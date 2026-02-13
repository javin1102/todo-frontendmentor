import TodoItem from "./TodoItem.tsx";
import TodoBox from "./TodoBox.tsx";
import { useTodos } from "../custom-hooks/useTodos.tsx";
import useFilter from "../custom-hooks/useFilter.tsx";
import { filterTodos } from "../utils/todo.ts";

const ListTodo = () => {
  const { todos, updateTodo, removeTodo, removeCompletedTodos } = useTodos();
  const { filter } = useFilter();
  const filteredTodos = filterTodos(filter, todos);
  
  return (
    <div className="w-full rounded-sm overflow-clip shadow-lg">
      {filteredTodos.length > 0 && (
        <ul className="w-full dark:text-gray-300">
          {filteredTodos.map((item) => (
            <TodoItem
              key={item.id}
              todoItem={item}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      )}
      <TodoBox className="justify-between">
        <span className="text-sm text-gray-400 text-margin-fix">
          {filteredTodos.length} items left
        </span>
        <span className="text-sm text-gray-400 cursor-pointer text-margin-fix" onClick={removeCompletedTodos}>
          Clear Completed
        </span>
      </TodoBox>
    </div>
  );
};
export default ListTodo;
