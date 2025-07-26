import { createContext, useContext } from 'react';

// DO Remember:
// JavaScript use korle "counter-context.js"
// TypeScript use korle "counter-context.ts"
export const CounterContext = createContext<number | undefined>(undefined);

// to Detect "undefined" Error & also function "return" type is "number"
export function useCounterContext(): number {
    const counter = useContext(CounterContext);

    if(counter === undefined){
        throw new Error("useCounterContext must be used with a CounterContext")
    }

    return counter;
}