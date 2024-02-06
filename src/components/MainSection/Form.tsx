"use client";
import { useTodo } from "@/context/todoContext";
import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";

function Form() {
  const [description, setDescription] = useState("");
  const { addTodos }: any = useTodo();
  const [title, setTitle] = useState("");

  const add = (e: any) => {
    e.preventDefault();
    if (!title) return alert("Please enter title");
    else if (!description) return alert("Please Enter description...");
    addTodos({ id: Date.now(), title, description, complete: false });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={add} className="w-2/4 flex flex-col gap-4">
        <div className="flex w-full items-center justify-between p-2 rounded-full border-2 border-gray-400 bg-gray-200 bg-opacity-10 flex-1">
          <input
            name="title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            placeholder="Enter your task title"
            type="text"
            className=" w-11/12 outline-none border-none bg-transparent"
          />
          <button>
            <IoAddCircle className="text-blue-500 text-3xl" />
          </button>
        </div>
        <div className="flex w-full items-center rounded-xl border-2 border-gray-400 bg-gray-200 bg-opacity-10 flex-1">
          <textarea
            className="w-full p-2 outline-none border-none bg-transparent min-h-16 max-h-72"
            placeholder="Enter your task description"
            name="description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            id="description"
            cols={30}
            rows={7}
          />
        </div>
      </form>
    </>
  );
}
export default Form;
