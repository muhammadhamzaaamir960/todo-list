import React from "react";
import SideBar from "../SIdeBar/SideBar";
import Heading from "./Heading";
import Form from "../MainSection/Form";

function HomePage() {
  return (
    <main className="flex w-full min-h-screen relative top-0 left-0 ">
      {/* sidebar */}
      <SideBar />
      {/* tasksInput */}
      <div className="w-full md:w-3/4 h-full flex flex-col gap-y-12 items-center justify-center ">
        <Heading />
        <Form />
      </div>
    </main>
  );
}

export default HomePage;
