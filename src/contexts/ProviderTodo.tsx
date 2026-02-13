// TodoProvider.tsx
import { useTodosState } from "../custom-hooks/useTodosState";
import { ContextTodo } from "./ContextTodo";

export const ProviderTodo = ({ children }: { children: React.ReactNode }) => {
  const value = useTodosState();
  return <ContextTodo.Provider value={value}>{children}</ContextTodo.Provider>;
};
