import React, { useEffect, useState } from "react";
import jobs from "../player.json";

function Players({ filter, setFilter }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(jobs);
  }, []);

  const handleClubClick = (club) => {
    setFilter(club);
  };

  const handlePositionHighlight = (position) => {
    alert(`Filtering players by position: ${position} is under development 🚧`);
  };

  const filtered = filter
    ? players.filter((player) => player.oldclubs.includes(filter))
    : players;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {filtered.map((player, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition border border-blue-100"
        >
          <div className="text-center space-y-1">
            <h2 className="text-xl font-bold text-blue-800">{player.name}</h2>
            <p className="text-sm text-gray-500">{player.club}</p>
            <p
              className="text-sm text-gray-600 cursor-pointer hover:underline"
              onClick={() => handlePositionHighlight(player.position)}
            >
              {player.position} • #{player.number}
            </p>
            <p className="text-xs text-gray-400">Contract: {player.contract}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {player.oldclubs.map((club, i) => (
                <button
                  key={i}
                  onClick={() => handleClubClick(club)}
                  className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 shadow-sm"
                >
                  {club}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="col-span-full text-center text-gray-500 italic">
          No players found for "{filter}"
        </div>
      )}
    </div>
  );
}

export default Players;
