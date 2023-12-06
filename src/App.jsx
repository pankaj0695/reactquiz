import { Fragment } from 'react';

import Header from './components/header';
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
