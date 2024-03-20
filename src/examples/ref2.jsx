import { useState, useRef } from "react";

const Ref2 = () => {
  const inputRef = useRef(null);

  const focus = () => {
        inputRef.current.focus();
  }

  return (
    <div className="container">
      <h1>Результат inputRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default Ref2;
