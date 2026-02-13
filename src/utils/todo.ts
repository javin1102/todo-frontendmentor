import type { FilterType } from "../types/Filter";
import type { Todo } from "../types/Todo";

export const filterTodos = (filterType: FilterType,  todos: Todo[]) => {
  switch (filterType) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed); case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
