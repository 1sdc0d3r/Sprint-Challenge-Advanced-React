import React from "react";

const Player = ({ player }) => {
  // console.log("player", player);
  return (
    <div id={player.id} className="player">
      <p>Player: {player.name}</p>
      <p>Country: {player.country}</p>
      <p>Searches: {player.searches}</p>
    </div>
  );
};

export default Player;
