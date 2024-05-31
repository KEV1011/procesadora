// src/utils/counter.js
export function incrementCounter(count) {
    return count + 1;
}

export function decrementCounter(count) {
    if (count > 0) {
        return count - 1;
    }
    return 0;
}

export function resetCounter() {
    return 0;
}
import React, { useState } from 'react';
import { incrementCounter, decrementCounter, resetCounter } from '../utils/counter';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(incrementCounter(count));
    };

    const handleDecrement = () => {
        setCount(decrementCounter(count));
    };

    const handleReset = () => {
        setCount(resetCounter());
    };

    return (
        <div className="counter">
            <h3>Contador: {count}</h3>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
            <button onClick={handleReset}>Resetear</button>
        </div>
    );
}

export default Counter;