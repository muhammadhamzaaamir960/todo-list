"use client";
import HomePage from "@/components/MainSection/HomePage";
import { TodoProvider } from "@/context/todoContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([]);
  const addTodos = (todo: todo) => {
    todos.map(
      (todoo: todo) => {
        if (todoo.title === todo.title) {
          return false;
        }}
    );
    setTodos((prev: any) => [todo, ...prev]);
  };
  const updateTodos = (id: number, todo: todo) => {
    setTodos((prev) =>
      prev.map((prevTodo: any) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodos = (id: number) => {
    setTodos((prev) => prev.filter((prevTodo: todo) => prevTodo.id !== id));
  };
  const toogleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((prevTodo: todo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos") || "[]");
    if (todo && todo.length > 0) {
      setTodos(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodos,
        updateTodos,
        deleteTodos,
        toogleCompleted,
      }}
    >
      <HomePage />
    </TodoProvider>
  );
}
