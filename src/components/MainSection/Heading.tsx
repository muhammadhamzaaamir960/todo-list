import React from "react";

function Heading() {
  return (
    <div className="flex flex-col gap-y-2 items-center mt-20">
      <h1 className="text-3xl shrink-0 font-bold text-secondary">
        Hamza's To-Do List
      </h1>
      <p className="text-md text-center text-gray-500">
        Write your day-to-day tasks to increase your productivity!
      </p>
    </div>
  );
}

export default Heading;
