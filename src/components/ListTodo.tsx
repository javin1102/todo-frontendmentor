import TodoItem from "./TodoItem.tsx";
import TodoBox from "./TodoBox.tsx";
import { useTodos } from "../custom-hooks/useTodos.tsx";

// const TodoListItem = [
//   {
//     id: 1,
//     text: "Complete online JavaScript course",
//   },
//   {
//     id: 2,
//     text: "Jog around the park 3x",
//   },
//   {
//     id: 3,
//     text: "10 minutes meditation",
//   },
//   {
//     id: 4,
//     text: "Read for 1 hour",
//   },
//   {
//     id: 5,
//     text: "Pick up groceries",
//   },
// ];
const ListTodo = () => {
  const { todos, updateTodo } = useTodos();

  return (
    <div className="w-full">
      <ul className="w-full">
        {todos.map((item, index) => (
          <TodoItem
            key={item.id}
            roundedTop={index === 0}
            roundedBottom={index === todos.length - 1}
            todoItem={item}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
      <TodoBox
        className="justify-between"
        roundedTop={false}
        roundedBottom={true}
      >
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
