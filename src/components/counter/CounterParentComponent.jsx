import { useState } from "react";
import CounterButtonComponent from "./CounterButtonComponent";

export default function CounterParentComponent(){
    const [parentCount, setCount] = useState(0)
    
    function incrementCounterParentFunction(byNumber) {
        setCount(parentCount+byNumber)
    }

    function decrementCounterParentFunction(byNumber) {
        setCount(parentCount-byNumber)
    }

    return(
        <>
            <span className="totalCount">Total Count: {parentCount}</span>
            
            <CounterButtonComponent byNumber={1} 
                incrementMethodPassedFromParent={incrementCounterParentFunction}
                decrementMethodPassedFromParent={decrementCounterParentFunction}>

            </CounterButtonComponent>

            <CounterButtonComponent byNumber={5} 
                incrementMethodPassedFromParent={incrementCounterParentFunction}
                decrementMethodPassedFromParent={decrementCounterParentFunction}>

            </CounterButtonComponent>
            
        </>
    )
}