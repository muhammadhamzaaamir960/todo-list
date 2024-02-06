import React, { useState } from "react";
import Status from "./Status";
import todo from "@/assets/todo.png";
import Image from "next/image";
import Todos from "./Todos";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={` w-[200px] sm:w-[300px]  md:w-1/4  bg-secondary absolute ${
        isOpen ? "left-0  delay-200 duration-500" : "left-[-500px] "
      }  md:static  bottom-0 top-0  ease-in-out transition-all `}
    >
      <div className="relative top-0 left-0">
        <button
          className={`fixed top-4 left-4 md:hidden    ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={todo} alt="Todo Image" width={40} height={40} />
        </button>
        <button
          className={`absolute top-1 right-4 border border-white   md:hidden  text-white bg-secondary ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ❌
        </button>
      </div>
      <div className={`flex my-6 flex-col items-center mt-10 `}>
        <div className="flex items-center">
          <h2 className="text-gray-200 text-3xl border-b-2 ">All Todo's</h2>
          <Image src={todo} alt="Todo Image" width={40} height={40} />
        </div>
        <Status />
        <Todos />
      </div>
    </section>
  );
}

export default SideBar;
