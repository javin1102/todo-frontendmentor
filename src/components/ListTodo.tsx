import TodoItem from "./TodoItem.tsx";
import TodoBox from "./TodoBox.tsx";
import { useTodos } from "../custom-hooks/useTodos.tsx";

const ListTodo = () => {
  const { todos, updateTodo, removeTodo } = useTodos();
  console.log("Rendering ListTodo");
  return (
    <div className="w-full rounded-sm overflow-clip shadow-lg">
      {todos.length > 0 && (
        <ul className="w-full">
          {todos.map((item) => (
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
          {todos.length} items left
        </span>
        <span className="text-sm text-gray-400 cursor-pointer text-margin-fix">
          Clear Completed
        </span>
      </TodoBox>
    </div>
  );
};
export default ListTodo;
