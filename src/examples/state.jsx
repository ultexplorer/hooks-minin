export default function State() {
    const [counter, setCounter] = useState(() => computeInitialCounter());
  
    const [state, setState] = useState({
      title:"Счетчик",
      date: Date.now(),
    })
  
    const increment = () => {
      setCounter((c) => c + 1);
      return setCounter((c) => c + 1);
    };
    const decrement = () => setCounter((prev) => prev + 1);
  
    const updateTitle = () => {
      setState((prev) =>({
        ...prev,
        title: "new Title"
      }))
    }
  
    return (
      <div>
        <h1>Счетчик: {counter}</h1>
        <button onClick={increment} className="btn btn-success">
          Add
        </button>
        <button onClick={decrement} className="btn btn-danger">
          Sub
        </button>
        <button onClick={updateTitle} className="btn btn-success">
          Изменить название
        </button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  }
  