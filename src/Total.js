import React from "react";

const Total = ({parts}) => {
    return (
        <p> Number of exercises:
            {
                parts.map(p => p.exercises).reduce((a, b) => {
                    return a + b
                })
            }
        </p>
    )
}
export default Total;