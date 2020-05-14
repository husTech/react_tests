import React, { useState } from "react";

function HookTodo() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(items);

    setItems([
      ...items,
      {
        id: items.length,
        value: title
      }
    ]);
  };

  const deleteItem = index => {
    const myArr = items.filter(item => {
      return item.id !== index;
    });
    setItems(myArr);
  };

  return (
    <div>
      <h5>======{title}=======</h5>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <button>submit</button>
      </form>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.value}

              <button onClick={e => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>

      <h5>=============</h5>
    </div>
  );
}

export default HookTodo;
