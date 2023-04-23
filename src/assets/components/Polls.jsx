import React, { useState } from 'react';
import Poll from 'react-polls';

const pollQuestion = 'Bech tjiw ta9raw?'
const pollAnswers = [
  { option: 'Yes', votes: 1 },
  { option: 'No', votes: 19 },
    { option: 'Maybe', votes: 2 },
]

function Polls() {
  const [answers, setAnswers] = useState(pollAnswers);
  const handleVote = voteAnswer => {
    const newAnswers = answers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setAnswers(newAnswers);
  }

  return (
    <div className='bg-white px-5'>
      <Poll question={pollQuestion} answers={answers} onVote={handleVote} />
    </div>
  );
};

export default Polls;