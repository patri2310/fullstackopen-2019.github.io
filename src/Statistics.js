import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
    let q = props.good + props.neutral + props.bad;
    let goods = props.good * 1;
    let bads = props.bad * -1;

    if (q > 0) {
        return (

            <table cellPadding="2" cellSpacing="2" border="0">
                <tbody>
                <Statistic text="good" value={props.good}/>
                <Statistic text="neutral" value={props.neutral}/>
                <Statistic text="bad" value={props.bad}/>
                <Statistic text="All" value={q}/>
                <Statistic text="Promedio" value={(goods + bads) / q}/>
                <Statistic text="Positivos" value={((goods / q) * 100) + "%"}/>
                </tbody>
            </table>

        )
    }
    else if (q === 0) {
        return (<p>No feedback given</p>)
    }

};

export default Statistics
