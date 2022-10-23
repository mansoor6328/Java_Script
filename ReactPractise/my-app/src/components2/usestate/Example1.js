import React, { useEffect, useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [car, setCar] = useState({
    brand: "Audi",
    color: "Red",
    yom: 2000,
  });

  const changeColor = () => {
    setCar((previousState) => {
      return {
        ...previousState,
        color: "blue",
      };
    });
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count}times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p onClick={setColor}>{color}</p>
      <button onClick={changeColor}>Blue</button>
      <p>{car.brand}</p>
      <p>{car.color}</p>
    </div>
  );
}

export default Example1;
