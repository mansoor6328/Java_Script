import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    posts();
  }, []);
  const posts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <table>
          <thead>
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        </thead>
        <tbody>
        {data.map((x) => (
          <tr key={x.id}>
            <td>{x.userId}</td>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.body}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Api;
