import React from 'react';
import { useState } from 'react'

export function Counter() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }
    return (
        <div className="counter">
            <h3>{counter}</h3>
            <button onClick={increment}>Increment + 1</button>
        </div>
    )
}