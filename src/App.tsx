import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Provider } from '@sanlamcx/react-ui-next-provider';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
