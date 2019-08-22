import React from "react";

const Total = (props) => {
    let q = props.good + props.neutral + props.bad;
    let goods = props.good * 1;
    let bads = props.bad * -1;
    return (
        <p>
            All: {q} <br/>
            Promedio: {(goods + bads) / q} <br/>
            Positivos: {(goods / q)*100} %
        </p>
    )
}

export default Total
