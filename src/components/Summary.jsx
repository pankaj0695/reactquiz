import Questions from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter(answer => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const skippedAnswersPercent = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersPercent = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersPercent =
    100 - skippedAnswersPercent - correctAnswersPercent;

  return (
    <div id='summary'>
      <img src={quizCompleteImg} alt='Trophy icon' />
      <h2>Quiz Completed!</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{skippedAnswersPercent}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{correctAnswersPercent}%</span>
          <span className='text'>answered correctly</span>
        </p>
        <p>
          <span className='number'>{wrongAnswersPercent}%</span>
          <span className='text'>answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) cssClass += ' skipped';
          else if (answer === Questions[index].answers[0])
            cssClass += ' correct';
          else cssClass += ' wrong';

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className='question'>{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped!'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
