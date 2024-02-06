"use client";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";
import { useTodo } from "@/context/todoContext";
import UpdateForm from "../MainSection/UpdateForm";

function Todos() {
  const { todos, deleteTodos, toogleCompleted }: any = useTodo();

  const toggleComplete = (id: number) => {
    toogleCompleted(id);
  };

  return (
    <div className=" w-4/5 flex flex-col items-center gap-3 justify-center mt-6   shadow-xl ">
      {todos &&
        todos.map((todo: todo) => {
          return (
            <div
              key={todo.id}
              className={`flex items-center justify-between w-full h-10 gap-4 rounded px-4 py-2   ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#d8cbe1]"
              }`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="rounded-full  cursor-pointer"
              />

              <p
                className={`text-start w-full overflow-hidden p-1 ${
                  todo.completed ? "line-through  " : "bg-[#d8cbe1] "
                }`}
              >
                {todo.title}
              </p>
              <div className="flex items-center justify-end">
                <button className="shrink-0 flex">
                  <UpdateForm todo={todo} />
                </button>
                <button
                  onClick={() => deleteTodos(todo.id)}
                  className="shrink-0 flex"
                >
                  <MdDelete className=" text-red-500 hover:rotate-12 hover:text-red-600 hover:duration-300 hover:delay-75 transition-all ease-in-out text-xl" />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Todos;
