import { useState } from "react";
import TodoBox from "././TodoBox.tsx";
import Checker from "./Checker.tsx";
import type { Todo } from "../types/Todo.ts";
import { useTodos } from "../custom-hooks/useTodos.tsx";

const InputTodo = () => {
  const [todoString, setTodoString] = useState("");
  const { addTodo } = useTodos();

  const handleAddTodo = () => {
    if (todoString.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: todoString,
      completed: false,
    };

    console.log("Adding new todo:", todoString);
    addTodo(newTodo);
    setTodoString("");
  };

  const handleOnEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <TodoBox className="gap-4">
      <Checker onClick={handleAddTodo} enableCheck={false} />
      <input
        placeholder="Create a new todo.."
        className="h-fit mt-1.5 outline-none"
        id="todo"
        name="todo"
        value={todoString}
        onChange={(e) => setTodoString(e.target.value)}
        onKeyDown={handleOnEnterPressed}
      />
    </TodoBox>
  );
};
export default InputTodo;
