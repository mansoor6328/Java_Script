import React from "react";

const Greet = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>{`Hello ${name} and my age is ${age}`}</h1>
    </div>
  );
};

export default Greet;
