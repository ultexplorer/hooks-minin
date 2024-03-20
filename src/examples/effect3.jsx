import { useState, useEffect } from "react";

const Effect3 = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x:0, y:0 });

  const mouseMoveHandler = event => {
    setPos({
      x:event.clientX,
      y:event.clientY
    })
  }

  useEffect(()=>{
    window.addEventListener('mousemove', mouseMoveHandler);
    return ()=>{
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  },[])
  

  return (
    <div>
      <h1>Type: {type}</h1>
      <button className={"btn btn-success"} onClick={() => setType("users")}>
        USERS
      </button>
      <button className={"btn btn-warning"} onClick={() => setType("todos")}>
        TODOS
      </button>
      <button className={"btn btn-danger"} onClick={() => setType("posts")}>
        POSTS
      </button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
};

export default Effect3;
