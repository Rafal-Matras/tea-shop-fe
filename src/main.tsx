import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserContextProvider } from './context/UserContext';

import { App } from './components/App/App';

import './index.css';
import { BasketContextProvider } from './context/BasketContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <BasketContextProvider>
          <App/>
        </BasketContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);