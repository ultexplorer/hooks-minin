import { useState, useEffect, useRef } from "react"

const Effect1 = () => {
    const [type, setType] = useState('users');

    const someNumber = useRef(0);
    someNumber.current = someNumber.current + 1

    useEffect(()=>{
        console.log('render')
    })

    return (
        <div className="container">
            <h1>Ресурс: {type}</h1>
            <h2>Render: {someNumber.current}</h2>
            <button className={'btn btn-success'} onClick={() => setType('users')}>Пользователи</button>
            <button className={'btn btn-success'} onClick={()=>setType('todo')}>Todo</button>
            <button className={'btn btn-success'} onClick={()=>setType('posts')}>Посты</button>
        </div>
    )
}

export default Effect1