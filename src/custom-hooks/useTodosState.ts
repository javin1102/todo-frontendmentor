// useContextTodo.ts (new file)
import { useState, useCallback, useMemo } from "react";
import type { Todo } from "../types/Todo";

export const useTodosState = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateTodo = useCallback((id: number, updates: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)),
    );
  }, []);

  const addTodo = useCallback((todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  }, []);

  const removeTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return useMemo(
    () => ({ todos, updateTodo, addTodo, removeTodo }),
    [todos, updateTodo, addTodo, removeTodo],
  );
};
