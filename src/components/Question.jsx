import { useState } from 'react';

import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import Questions from '../questions';

function Question({ index, onSubmitAnswer, onSkipAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  let timer = 10000;

  if (selectedAnswer !== '') timer = 1000;
  if (isAnswerCorrect !== null) timer = 2000;

  const selectAnswerHandler = answer => {
    setSelectedAnswer(answer);

    setTimeout(() => {
      setIsAnswerCorrect(answer === Questions[index].answers[0]);

      setTimeout(() => {
        onSubmitAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState;
  if (selectedAnswer !== '') {
    if (isAnswerCorrect === null) answerState = 'answered';
    else answerState = isAnswerCorrect ? 'correct' : 'wrong';
  }

  return (
    <div id='question'>
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{Questions[index].text}</h2>
      <Answers
        answers={Questions[index].answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectAnswer={selectAnswerHandler}
      />
    </div>
  );
}

export default Question;
