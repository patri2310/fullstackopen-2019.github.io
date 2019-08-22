import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Header from './Header'
import Counter from './Counter'
import Total from './Total'

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
            <Counter good={good} neutral={neutral} bad={bad}/>
            <Total good={good} neutral={neutral} bad={bad}></Total>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
