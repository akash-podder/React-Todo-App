import React, { useContext } from 'react'
import { CounterContext, useCounterContext } from './counter-context';

const Component2: React.FC = () => {
    // Old way
    // const counter = useContext(CounterContext);
    
    // New way with "undefined" Safety Detection
    const counter = useCounterContext();

    return (
        <h1>
            This is from Component2 & count is: {counter}
        </h1>
    )
}

export default Component2;