import { useState, useEffect, useMemo } from "react";

function complexCompute(num) {
  let i = 0;
  while(i < 1000) i++
  return num *2;
}


function Usememo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? "darkred" : "black"
  }), [colored])
  
  const computed = useMemo(() =>complexCompute(number), [number])

  useEffect(() => {
    console.log('styles h1 changed!')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        добавить
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        убрать
      </button>

      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        изменить
      </button>
      
    </div>
  );
}

export default Usememo;
