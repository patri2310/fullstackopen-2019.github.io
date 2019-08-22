import React from "react";

const Counter = ({good, neutral, bad}) => {
    return (
        <p>
            good: {good} <br/>
            neutral: {neutral} <br/>
            bad: {bad}
        </p>
    )
}

export default Counter