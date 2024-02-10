import { useState, useEffect } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <p>Hi</p>
      <Message count={count} />
      <button onClick={getAdvice}>Get Advice</button>
      <p>{advice}</p>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      <h1>You have read {props.count} advice</h1>
    </p>
  );
}

export default App;
