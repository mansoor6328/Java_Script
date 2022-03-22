import React from "react";
import Person from "./Person";

function NewList() {
  const persons = [
    {
      id: 1,
      name: "virat",
      age: 32,
      skill: "Cover Drive",
    },
    {
      id: 2,
      name: "ABD",
      age: 35,
      skill: "Pull Shot",
    },
    {
      id: 3,
      name: "Maxwell",
      age: 33,
      skill: "Reverse Sweep",
    },
    {
      id: 4,
      name: "Gayle",
      age: 40,
      skill: "Six Hitting",
    },
  ];

  const personsList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personsList}</div>;
}

export default NewList;
