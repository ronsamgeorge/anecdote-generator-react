import { useState } from "react";

const Header = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

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

const DisplayMax = ({didVote, anecdotes, votes, maxVote}) => {
  if (!didVote){
    return(
      <div>
        <p>There are no votes Yet</p>
      </div>
    )
  }

  return (
    <div>
      <p>max votes is "<em>{anecdotes[maxVote]}</em>" , which has {votes[maxVote]} votes</p>
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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [didVote, setDidVote] = useState(false);
  const [maxIndex, setMaxIndex] = useState(0);

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

  // on voting function is called.
  // will update the votes array by setting it to the new array 

  const updateVote = (props) => {
    const tempVoteArray = [...votes];  // creates new duplicate of the votes array  
    tempVoteArray[random]++;          // increases  the vote for the specific anecdote
    setVotes(tempVoteArray);          //  set the votes array with the new one
    updateMax(tempVoteArray[random]); // update the max counter if the recently voted anecdote has the max votes
    setDidVote(true);
  }

  const updateMax = (newValue) => {
    if(votes[maxIndex] < newValue){
      setMaxIndex(random);
    }
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <h3>{anecdotes[random]}</h3>
      <DisplayVotes vote={votes[random]} />
      <Button onClick={updateVote} text="Vote for anecdote"/>
      <Button onClick={updateRandom} text={"Generate Anecdote"}/>

      <Header text="Anecdote with the max vote" />
      <DisplayMax didVote={didVote} anecdotes={anecdotes} votes={votes} maxVote={maxIndex}/>
      
    </div>
  )
}

export default App;