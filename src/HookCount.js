import React, { useState } from "react";

function HookCount() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={increment}>clicked {count}</button>
    </div>
  );
}

export default HookCount;
