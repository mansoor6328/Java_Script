import React, { useState } from "react";

function ShowHideAnElement() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>
      {show && <div>Toggle Element</div>}
    </div>
  );
}

export default ShowHideAnElement;
