import React from 'react';
import {useState} from 'react';
import './part1.css';

const Counterapp = () => {

    const [count,setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
    const Reset = () => {
        setCount(0)
    }

    return(
        <div className='head'>
            <h1 className='app'>Counter App</h1>
            <p>{count}</p>
            <div className='head-left'>
            <button onClick={Increment}>Increment</button>
            <button onClick={Reset} className='btn'>Reset</button>
            <button onClick={Decrement}>Decrement</button>
            </div>

        </div>

    )

}
export default Counterapp;