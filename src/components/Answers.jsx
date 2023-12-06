import { useRef } from 'react';

function Answers({ answers, selectedAnswer, answerState, onSelectAnswer }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id='answers'>
      {shuffledAnswers.current.map(answer => {
        const isSelected = answer === selectedAnswer;
        let cssClass = '';

        if (isSelected && answerState === 'answered') {
          cssClass = 'selected';
        }

        if (
          isSelected &&
          (answerState === 'correct' || answerState === 'wrong')
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className='answer'>
            <button
              onClick={onSelectAnswer.bind(null, answer)}
              className={cssClass}
              disabled={selectedAnswer !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
