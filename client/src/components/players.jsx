import React from "react";
import Player from "./Player";
import useLocalStorage from "../hooks/useLocalStorage";

const Players = ({ state }) => {
  //   console.log("state", state);
  const [value, setValue] = useLocalStorage("players");

  const settingValue = ele => {
    setValue(ele);
  };

  React.useEffect(() => {
    // console.log("value changed", value);
    settingValue(state.players);
  }, [state]);

  return (
    <div className="player-div">
      <button data-testID="button">BuTtOn</button>
      {state.players.map(e => (
        <Player player={e} />
      ))}
    </div>
  );
};

export default Players;
