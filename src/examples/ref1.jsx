import { useRef } from 'react'

function  Ref1 () {
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
    }

    return <div>
        <input ref={inputRef} />
        <button className={'btn btn-success'} onClick={focus}>focus</button>
    </div>
}

export default Ref1