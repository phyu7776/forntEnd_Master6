import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrementCounterPartentFuction(by) {
        setCount(count + by);
    }

    function decrementCounterPartentFuction(by) {
        setCount(count - by);
    }

    function resetCounter() {
        setCount(0)
    }
    
    return (
        <div>
            <span className="totalCount">{count}</span>
            <CounterButton 
                by={1}
                incrementMethod={incrementCounterPartentFuction}
                decrementMethod={decrementCounterPartentFuction}
            />
            <CounterButton 
                by={2}
                incrementMethod={incrementCounterPartentFuction}
                decrementMethod={decrementCounterPartentFuction}
            />
            <CounterButton 
                by={5}
                incrementMethod={incrementCounterPartentFuction}
                decrementMethod={decrementCounterPartentFuction}
            />

            <button 
                className="resetButton" 
                onClick={resetCounter}
            > Reset
            </button>
        </div>
    )
}

Counter.propTypes = {
    by : PropTypes.number
}

Counter.defaultProps = {
    by : 1
}