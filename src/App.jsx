import { Fragment } from 'react';

import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Quiz />
      </main>
    </Fragment>
  );
}

export default App;
