import { PropTypes } from 'prop-types'
import './Counter.css'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

    // const buttonStyle = {
    //     fontSize:"16px",
    //     backgroundColor: "#00a5ab",
    //     width: "100px",
    //     margin: "10px",
    //     color: "white",
    //     padding: "15px",
    //     borderRadius: "30px"
    // }

    // function incrementCounterFunction() {
    //     incrementMethod(by);
    // }

    // function decrementCounterFunction() {
    //     decrementMethod(by);
    // }

    return (
        <div className="Counter">
            <div>
            <button 
                className="counterButton" 
                onClick={() => incrementMethod(by)}
                // 방법 1.
                // style={{fontSize:"30px"}}

                // 방법 2.
                // style={buttonStyle}
            >+{by} </button>

            <button 
                className="counterButton" 
                onClick={() => decrementMethod(by)}
            >-{by}
            </button>
            
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by : PropTypes.number
}

CounterButton.defaultProps = {
    by : 1
}