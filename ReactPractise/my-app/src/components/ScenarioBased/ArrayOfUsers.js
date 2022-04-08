import React from "react";
import './style.css'

function ArrayOfUsers() {
  const users = [
    {
      name: "kushal",
      age: 25,
      talent: "coding king",
    },
    {
      name: "chetan",
      age: 25,
      talent: "css queen",
    },
    {
      name: "darshan",
      age: 24,
      talent: "keeping lots of girlfriends",
    },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Talent</th>
        </tr>
        {users.map((x) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.age}</td>
            <td>{x.talent}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ArrayOfUsers;
