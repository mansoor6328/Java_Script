import React, { useEffect, useState } from "react";
import Light from "./Light";

const lightDurations = [10000, 10000, 10000];

function Example3({initialValue}) {
  const [colorIndex, setColorIndex] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(timer);
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="traffic-light"> 
    <Light color="#f00" active={colorIndex === 0} />
    <Light color="#ff0" active={colorIndex === 2} />
    <Light color="#0c0" active={colorIndex === 1} />
  </div>
  );
}

export default Example3;
