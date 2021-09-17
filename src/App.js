import "./styles.css";
import React from "react";
import useRandomColor from "./useRandomColor.js";

function App() {
  const { colors, changeColors } = useRandomColor();
  return (
    <div
      className="App"
      style={{ background: "#" + colors, height: "100%", width: "100%" }}
    >
      <h1
        style={{
          border: "1px solid black",
          background: "#23406",
          boxSize: "",
          color: "brown",
          textAlign: "center"
        }}
      >
        Change Background
      </h1>
      <button onClick={changeColors}>click to change</button>
    </div>
  );
}

export default App;
