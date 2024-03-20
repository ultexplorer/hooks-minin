import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  console.log("complexCompute");
  let i = 0;
  while (i < 10000000) i++;
  return num * 2;
}

function UseMem1() {
  const [number, setNumber] = useState(55);
  
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({ color: colored ? 'green' : 'red' }),[colored])

  //const computed = complexCompute(number)
 const computed  = useMemo(() => {
    return complexCompute(number)
 }, [number])

 useEffect(()=> {
    console.log('styles changed')
 }, [styles])


  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Убрать
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored(prev => !prev)}
      >
        Изменить
      </button>
    </>
  );
}

export default UseMem1;
