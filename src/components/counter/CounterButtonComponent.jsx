import {useState} from 'react';
import {PropTypes} from 'prop-types';

import './Counter.css';

// here "byNumber" is a Properties "Argument"
// "incrementMethodPassedFromParent" & "decrementMethodPassedFromParent" are Passed From Parent
export default function CounterButtonComponent(
  
  {byNumber, incrementMethodPassedFromParent, decrementMethodPassedFromParent}

){

    console.log("byNumber:" + byNumber);
    
    // 2 ways to add CSS... 1st way is like this way... this is called "in-line" CSS, eikane Property gula "font-size" hoye jabe "fontSize"... because amra "JSX" file ee achi... also use Double Qoutes --> "" --> For Values "100px"
    const buttonStyle = {
        fontSize:"30px",
        backgroundColor: "#00a5ab",
        color: "white",
        width: "100px",
        margin: "10px",
        padding: "15px",
        borderRadius: "30px",
    };

    // [0, f] --> this DE-CONSTRUTING the Array to TWO Elements
    const [count, setCount] = useState(0); // here, "useState(INITIAL_VALUE_PARAM)" ---> useState takes a Parameter for Default Initial Value

    function incrementCounterFunction() {
        // setCount(count+byNumber)
        incrementMethodPassedFromParent(byNumber)
        console.log('incrementMethodPassedFromParent');
    }
    
    function decrementCounterFunction() {
        // setCount(count-byNumber)
        decrementMethodPassedFromParent(byNumber)
        console.log('decrementMethodPassedFromParent');
    }

    return (
      <div className="Counter">
        Counter: 
        <span className="count">{count}</span>
        <div>
            <button className="counterButton" 
            onClick={incrementCounterFunction}
            // style={buttonStyle}
            >+{byNumber}</button>

            <button className="counterButton" 
            onClick={decrementCounterFunction}
            // style={buttonStyle}
            >-{byNumber}</button>
        </div>

      </div>
    )
}

// Giving "Type" Constraints for our "Properties"
CounterButtonComponent.propTypes = {
  byNumber: PropTypes.number
}


// Giving "Default" Values for "Properties"
CounterButtonComponent.defaultProps = {
  byNumber: 3
}