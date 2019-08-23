import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
    let q = props.good + props.neutral + props.bad;
    let goods = props.good * 1;
    let bads = props.bad * -1;

    if (q > 0) {
        return (
            <p>
                <Statistic text="good" value ={props.good} />
                <Statistic text="neutral" value ={props.neutral} />
                <Statistic text="bad" value ={props.bad} />
                <Statistic text="All" value={q}/>
                <Statistic text="Promedio" value={(goods + bads) / q}/>
                <Statistic text="Positivos" value={((goods / q) * 100)+"%"}/>
            </p>
        )
    }
    else if (q === 0) {
        return (<p>No feedback given</p>)
    }

}

export default Statistics
