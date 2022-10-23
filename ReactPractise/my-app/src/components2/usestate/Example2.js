import React, { useEffect, useState } from "react";

function Example2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);
  return <div>I have rendered {count} times</div>;
}

export default Example2;
