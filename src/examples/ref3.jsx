import { useState, useRef } from 'react'

const Ref3 = () => {

    const [count, setCount ] = useState(0)
    const someNumber = useRef(0)

    const incrementCount = () => {
        setCount((prev) => prev + 1)
        someNumber.current = someNumber.current + 1;
    }

    console.log('Rerendering')

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Some number: {someNumber.current}</h2>
            <button onClick={incrementCount}>Increment count</button>
        </div>
    )
}

export default Ref3