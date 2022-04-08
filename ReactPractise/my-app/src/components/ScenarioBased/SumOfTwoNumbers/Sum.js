import React, { useState } from "react";

function Sum() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);
  return (
    <div>
      <h2>Sum Of Two Numbers</h2>
      <input
        value={number1}
        type="number"
        placeholder="First Number"
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        value={number2}
        type="number"
        placeholder="Second Number"
        onChange={(e) => setNumber2(+e.target.value)}
      />
      <button onClick={() => setTotal(number1 + number2)}>
        Add Two Numbers
      </button>

      <p>Total : {total || ""}</p>
    </div>
  );
}

export default Sum;
