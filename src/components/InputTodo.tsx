import { useContext, useState } from "react";
import TodoBox from "././TodoBox.tsx";
import Checker from "./Checker.tsx";
import type { Todo } from "../types/Todo.ts";
import { ContextTodo } from "../contexts/ContextTodo.tsx";

const InputTodo = () => {
  const [todoString, setTodoString] = useState("");
  const context = useContext(ContextTodo);
  const handleAddTodo = () => {
    if (todoString.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: todoString,
      completed: false,
    };

    if (!context) return;
    context.addTodo(newTodo);
    setTodoString("");
  };

  const handleOnEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <TodoBox className="gap-4 rounded-sm dark:text-white">
      <Checker onClick={handleAddTodo} isChecked={false} />
      <input
        placeholder="Create a new todo.."
        className="h-fit outline-none"
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
