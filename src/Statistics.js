import React from "react";
import Counter from "./Counter";

const Statistics = (props) => {
    let q = props.good + props.neutral + props.bad;
    let goods = props.good * 1;
    let bads = props.bad * -1;

    if (q > 0) {
        return (
            <p>
                <Counter good={props.good} neutral={props.neutral} bad={props.bad}/>

                All: {q} <br/>
                Promedio: {(goods + bads) / q} <br/>
                Positivos: {(goods / q) * 100} %

            </p>
        )
    }
    else if (q === 0) {
        return (<p>No feedback given</p>)
    }

}

export default Statistics
