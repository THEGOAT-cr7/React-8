import React, { useState } from "react";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 font-sans">
      <Header filter={filter} setFilter={setFilter} />
      <Players filter={filter} setFilter={setFilter} />
      <footer className="w-full text-center py-4 bg-blue-200 text-gray-800 font-semibold shadow-inner">
        Made by Asadbek Tursunaliyev
      </footer>
    </div>
  );
}

export default App;
