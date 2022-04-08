import React, { useState } from "react";

function TwoWayDataBinding() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        placeholder="Enter here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}

export default TwoWayDataBinding;
