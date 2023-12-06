import { useCallback, useState } from 'react';

import Questions from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';
import Button from './Button.jsx';

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === Questions.length;

  const startQuizHandler = () => {
    setIsQuizStarted(true);
  };

  const submitAnswerHandler = useCallback(selectedAnswer => {
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer]);
  }, []);

  const skipAnswerHandler = useCallback(() => {
    submitAnswerHandler(null);
  }, [submitAnswerHandler]);

  if (!isQuizStarted)
    return <Button onClick={startQuizHandler}>Start Quiz</Button>;

  if (quizIsComplete) return <Summary userAnswers={userAnswers} />;

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSubmitAnswer={submitAnswerHandler}
        onSkipAnswer={skipAnswerHandler}
      />
    </div>
  );
}

export default Quiz;
