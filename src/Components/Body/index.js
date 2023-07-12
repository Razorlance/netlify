import React, { useState } from "react";
import "./style.css";

const Body = () => {
  const [a, setA] = useState(true);

  const click = () => {
    setA(!a);
    console.log(a, "a");
  };

  return (
    <div className="body">
      {a && <p>Body</p>}
      <button onClick={click}>Click</button>
    </div>
  );
};

export default Body;
