import { useContext } from "react";
import { ContextTodo } from "../contexts/ContextTodo";

export const useTodos = () => {
  const context = useContext(ContextTodo);
  if (!context) {
    throw new Error("useTodos must be used within TodoProvider");
  }
  return context;
};
