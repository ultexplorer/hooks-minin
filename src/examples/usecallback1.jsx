import { useState, useMemo, useCallback } from "react";
import ItemsList from "./itemsList";

const UseCaback1 = () => {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({ color: colored ? 'green' : 'red' }),[colored])

  const generateItemsFromAPI = useCallback((indexNumber) => {
    return new Array(count).fill('').map((_,i) => `Элемент ${i + indexNumber}`)
  },[count])


  return (
    <div className="container">
        <h1 style={styles}>Количество элементов: {count}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
      <ItemsList getItems={generateItemsFromAPI}/>
    </div>
  );
};

export default UseCaback1;
