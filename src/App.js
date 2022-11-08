import { useState } from "react";

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const DisplayVotes = (props) => {
  return(
    <div>
      <p> This anecdote has {props.vote} votes</p>
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [random, setRandom] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  // function to generate random
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const updateRandom = () => {
    const tempRandom = getRandomInt(0,anecdotes.length);
    setRandom(tempRandom);
  }

  const updateVote = (props) => {
    const tempVoteArray = [...votes];
    tempVoteArray[random]++;
    console.log(tempVoteArray);
    setVotes(tempVoteArray);
  }


  return (
    <div>
      <p>{anecdotes[random]}</p>
      <DisplayVotes vote={votes[random]} />
      <Button onClick={updateVote} text="Vote for anecdote"/>
      <Button onClick={updateRandom} text={"Generate Anecdote"}/>
    </div>
  )
}

export default App;