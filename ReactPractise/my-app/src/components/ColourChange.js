import React, { useState } from "react";

function ColourChange() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> {count}</h2>
      <button
        style={count % 2 === 0 ? { background: "red" } : { background: "blue" }}
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
    </div>
  );
}

export default ColourChange;
