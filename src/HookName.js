import React, { useState } from "react";

function HookName() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h1>{name.firstName}</h1>
      <h1>{name.lastName}</h1>
    </div>
  );
}

export default HookName;
