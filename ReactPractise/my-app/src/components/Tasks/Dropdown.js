import React, { useState } from "react";

const arr = ["Introduction", "React", "Redux"];

function Dropdown() {
  const [status, setStatus] = useState(false);
  const [val, setVal] = useState("");

  const handleClick = (data) => {
    setStatus(!status);
    setVal(data);
  };
  return (
    <div>
      {arr.map((x) => (
        <div>
          <h1 onClick={() => handleClick(x)}>{x}</h1>
          {status && x === val ? (
            <ul>
              <li>HOC</li>
              <li>Control</li>
              <li>Error</li>
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
    