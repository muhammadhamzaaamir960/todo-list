"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { MdDelete } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import React, { useState } from "react";

function Todos() {
  return (
    <div className=" w-4/5 flex flex-col items-center gap-3 justify-center mt-6   shadow-xl ">
      {}
      <div className="flex items-center justify-between w-full h-10 gap-4 rounded px-4 py-2 bg-primary  ">
        <Checkbox.Root
          className="flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-full bg-white shrink-0  outline-none border-2 border-orange-400 hover:border-orange-500"
          id="c1"
        >
          <Checkbox.Indicator className="text-orange-400  ">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <h4 className="text-start flex-1 shrink-0 w-full text-gray-700 "></h4>
        <div className="flex items-center justify-end">
          <button className="shrink-0 flex">
            <LiaEdit className=" text-green-500 hover:rotate-12 hover:text-green-600 hover:duration-300 hover:delay-75 transition-all ease-in-out text-xl" />
          </button>
          <button className="shrink-0 flex">
            <MdDelete className=" text-red-500 hover:rotate-12 hover:text-red-600 hover:duration-300 hover:delay-75 transition-all ease-in-out text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todos;
