import { createContext } from "react";
import { useTodosState } from "../custom-hooks/useTodosState";
export const ContextTodo = createContext<
  ReturnType<typeof useTodosState> | undefined
>(undefined);
