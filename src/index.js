import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Header from './Header'
import Statistics from './Statistics'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header title={"give feedback"}/>
            <Button text={'good'} click={()=>setGood(good+1)}/>
            <Button text={'neutral'} click={()=>setNeutral(neutral+1)}/>
            <Button text={'bad'} click={()=>setBad(bad+1)}/>
            <Header title={"statistics"}/>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
