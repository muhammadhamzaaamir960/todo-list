import React from "react";
import SideBar from "../SIdeBar/SideBar";
import From from "./Form";
import Heading from "./Heading";

function HomePage() {
  return (
    <main className="flex w-full min-h-screen ">
      {/* sidebar */}
      <SideBar />

      {/* tasksInput */}
      <div className="w-3/4 h-full flex flex-col gap-y-12 items-center justify-center  ">
        
          <Heading />
          <From />
    
      </div>
    </main>
  );
}

export default HomePage;
