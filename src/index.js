import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button";

const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
    const better = Object.entries({...points }).sort((a,b) => a[1] > b[1] ? -1 : b[1] > a[1] ? 1 : 0)[0];

    return (
        <div>
            <div>Anecdote of the day</div>
            {console.log("selected and votes ", selected, points)}
            <div>{anecdotes[selected]}</div>
            <div> has {points[selected]}</div>
            <Button text="vote" click={ () => {
                const copyPoints = { ...points }
                copyPoints[selected] += 1;
                setPoints(copyPoints);
                setSelected(selected);
            }}/>
            <Button text="next anecdote" click={
                () => {
                const random = Math.floor(Math.random() * (anecdotes.length));
                setSelected(random);
            }}/>

            <div>---</div>
            <div>Anecdote with most votes</div>
            <div>{anecdotes[better[0]]}  has votes {better[1]}</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)
