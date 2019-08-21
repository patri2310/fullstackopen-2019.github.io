import React from "react";

const Total = (props) => {
    return (
        <p> Number of exercises:
            {
                props.parts.map(p => p.exercises).reduce((s, e) => {
                    return s + e
                })
            }
        </p>
    )
}
export default Total;