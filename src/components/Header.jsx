import React from "react";

function Header({ filter, setFilter }) {
  return (
    <header className="w-full h-[60px] bg-blue-600 text-white flex items-center justify-between px-6 shadow-md">
      <h1 className="text-xl font-bold tracking-wide">⚽ Football Stars</h1>
      {filter && (
        <button
          onClick={() => setFilter("")}
          className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-blue-100 transition font-medium shadow"
        >
          Clear Filter: {filter} ✕
        </button>
      )}
    </header>
  );
}

export default Header;
