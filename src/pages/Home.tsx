import { useState } from 'react';
import { Paper } from '@sanlamcx/react-ui-next-paper';
import { Typography } from '@sanlamcx/react-ui-next-typography';

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="../assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <Paper rounding={Paper.ROUNDING.SMALL} elevation shadow={Paper.SHADOW.MEDIUM}>
        <Typography variant={Typography.VARIANT.H2}>Vite + React</Typography>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </Paper>
      <Typography variant={Typography.VARIANT.B3}>Click on the Vite and React logos to learn more</Typography>
    </div>
  );
};
