import React, { useState, useEffect } from "react";

function Api2() {
  const [user, setUser] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      console.log(data);
      setUser([...data.results]);
    }
    fetchData();
  }, []);
  return (
    <div>
      <input
        type="text"
        id="user"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      {/* {user.map((i) => (
        <h1>{i.name.first}</h1>
      ))} */}
      <ul>
        {user
          .filter((i) => i.name.first.includes(val) || val === "")
          .map((x) => (
            <li>{x.name.first}</li>
          ))}
      </ul>
    </div>
  );
}

export default Api2;
