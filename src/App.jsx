import React from "react";
import Header from "./components/Header";
import video from "./assets/main.mp4";
import Players from "./components/Players";

const App = () => {
  return (
    <div className="h-[700px] container mx-auto relative">
      <Header />
      <video loop muted autoPlay className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1] blur-[1px]">
        <source src={video} type="video/mp4" />
      </video>
      <Players/>
    </div>
  );
};

export default App;
