"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import Todos from "../SIdeBar/Todos";

function Form() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todos, setTodos] = useState<todos[]>([]);

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleClick = () => {
    setTodos([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const submitHandle = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
    <form onSubmit={submitHandle} className="w-2/4 flex flex-col gap-4">
      <div className="flex w-full items-center justify-between p-2 rounded-full border-2 border-gray-400 bg-gray-200 bg-opacity-10 flex-1">
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task title"
          type="text"
          className=" w-11/12 outline-none border-none bg-transparent"
        />
        <button onClick={handleClick} className="">
          <IoAddCircle className="text-blue-500 text-3xl" />
        </button>
      </div>
      <div className="flex w-full items-center rounded-xl border-2 border-gray-400 bg-gray-200 bg-opacity-10 flex-1">
        <textarea
          className="w-full p-2 outline-none border-none bg-transparent min-h-16 max-h-72"
          placeholder="Enter your task description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

