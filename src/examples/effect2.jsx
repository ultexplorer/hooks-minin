import { useState, useEffect, useRef } from "react"

const Effect2 = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState([])
    const [mount, setMount] = useState(false)

    const someNumber = useRef(0);
    someNumber.current = someNumber.current + 1

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

      return () => {
        console.log('clean type')
      }
    },[type])
    
    useEffect(()=>{
        console.log('ComponentDidMount')
        setMount(true)
    }, [])

    return (
        <div className="container">
            {mount && <h3>Component get mounted</h3>}
            <h1>Ресурс: {type}</h1>
            <h2>Render: {someNumber.current}</h2>
            <button className={'btn btn-success'} onClick={() => setType('users')}>Пользователи</button>
            <button className={'btn btn-success'} onClick={()=>setType('todos')}>Todo</button>
            <button className={'btn btn-success'} onClick={()=>setType('posts')}>Посты</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Effect2