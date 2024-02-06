"use client"
import { createContext, useContext } from "react";
const TodoContext = createContext<todosType | null>(null);
export default TodoContext;

export function useTodo () {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;