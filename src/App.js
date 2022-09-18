import React, { useState } from 'react';
import Thanks from './Thanks';
import Rate from './Rate';

function App() {
  
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  console.log(selected, submitted);

  const checkSelected = () => {
    if (selected !== null) setSubmitted(true);
  }


  return (
    <React.Fragment>
      {submitted ? <Thanks rate={3}/> : <Rate setSelected={setSelected} checkSelected={checkSelected} />}
    </React.Fragment>
  );
}

export default App;

