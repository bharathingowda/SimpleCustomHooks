import { useState } from "react";

const useRandomColor = () => {
  const [colors, setColors] = useState("");

  const changeColors = () => {
    setColors(Math.random().toString(16).substr(-6));
  };
  return { colors, changeColors };
};

export default useRandomColor;
