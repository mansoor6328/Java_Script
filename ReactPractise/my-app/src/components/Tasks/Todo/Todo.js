import React, { useEffect, useRef, useState } from "react";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [val, setVal] = useState("");
  const loaded = useRef(false);

  useEffect(() => {
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (loaded.current === true) {
      console.log("todolist value change");
    }
  }, [todoList, val]);

  const addTodo = () => {
    setTodoList([
      { id: new Date().toString(), text: val, isDone: false },
      ...todoList,
    ]);
    setVal("");
  };

  const deleteTodo = (item) => {
    const newList = todoList.filter((x) => x.id !== x.item.id);
    setTodoList([...newList]);
  };
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button type="button" disabled={val.length < 1} onClick={() => addTodo()}>
        Add Todo
      </button>
      {todoList.map((item) => (
        <div key={item.id}>
          {item.text}
          <button type="button" onClick={() => deleteTodo(item)}>
            Delete Todo
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
