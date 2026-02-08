import React from "react";
import TodoBox from "./TodoBox.tsx";
import Checker from "./Checker.tsx";
import type { Todo } from "../types/Todo.ts";

const TodoItem = ({
  todoItem,
  roundedTop = false,
  roundedBottom = false,
  updateTodo,
}: {
  todoItem: Todo;
  roundedTop?: boolean;
  roundedBottom?: boolean;
  updateTodo: (id: number, updates: Partial<Todo>) => void;
}) => {
  const setTodoComplete = () => {
    updateTodo(todoItem.id, { completed: !todoItem.completed });
  };
  console.log(
    "Rendering TodoItem:",
    todoItem.text,
    "Completed:",
    todoItem.completed,
  );
  return (
    <li>
      <TodoBox
        className="gap-4"
        roundedTop={roundedTop}
        roundedBottom={roundedBottom}
      >
        <Checker enableCheck={true} onClick={setTodoComplete} />
        <p
          className={`text-margin-fix flex-1 ${todoItem.completed && "line-through text-gray-400"}`}
        >
          {todoItem.text}
        </p>
        <button className="cursor-pointer">
          <img src="/src/assets/images/icon-cross.svg" alt="x" />
        </button>
      </TodoBox>
    </li>
  );
};
export default React.memo(TodoItem);
