import React from "react";
import Status from "./Status";
import todo from "@/assets/todo.png";
import Image from "next/image";
import Todos from "./Todos";

function SideBar() {
  return (
    <section className="w-1/4 bg-secondary">
      <div className="flex my-6 flex-col items-center">
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
