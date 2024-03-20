import { useState, useRef } from "react";

const Ref4 = () => {
  const [text, setText] = useState("");

  let someNumber = useRef(0)

  someNumber.current = someNumber.current + 1;


  const handleInput = (e) => {
    setText(e.target.value);
  };

  console.log("Rerendering");

  return (
    <div className="container">
        <h4>Rendered {someNumber.current} times</h4>
      <input onChange={handleInput} value={text} />
    </div>
  );
};

export default Ref4;
