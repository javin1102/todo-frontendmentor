import React from "react";
import TodoBox from "./TodoBox.tsx";
import Checker from "./Checker.tsx";
import type { Todo } from "../types/Todo.ts";

const TodoItem = ({
  todoItem,
  updateTodo,
  removeTodo,
}: {
  todoItem: Todo;
  updateTodo: (id: number, updates: Partial<Todo>) => void;
  removeTodo: (id: number) => void;
}) => {
  const setTodoComplete = () => {
    updateTodo(todoItem.id, { completed: !todoItem.completed });
  };

  const handleRemoveTodo = () => {
    removeTodo(todoItem.id);
  };

  console.log(
    "Rendering TodoItem:",
    todoItem.text,
    "Completed:",
    todoItem.completed,
  );

  return (
    <li className="first:rounded-t-lg last:rounded-b-lg overflow-hidden group">
      <TodoBox className="gap-4 ">
        <Checker enableCheck={true} onClick={setTodoComplete} />
        <p
          className={`text-margin-fix flex-1 ${todoItem.completed && "line-through text-gray-400"}`}
        >
          {todoItem.text}
        </p>
        <button className="cursor-pointer" onClick={handleRemoveTodo}>
          <img src="/src/assets/images/icon-cross.svg" alt="x" />
        </button>
      </TodoBox>
    </li>
  );
};
export default React.memo(TodoItem);
