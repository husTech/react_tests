import React, { useState } from "react";

function HookArray() {
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

  return (
    <div>
      <h5>======{title}=======</h5>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <button>submit</button>
      </form>

      <ul>
        {items.map(item => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>

      <h5>=============</h5>
    </div>
  );
}

export default HookArray;
