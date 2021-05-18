import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ServerProvider } from './Contexts/ServerProvider';
import IsLoginProvider from './Contexts/IsLoginProvider';
import BooksProvider from './store/Provider/BooksProvider';

ReactDOM.render(
  <React.StrictMode>
    <BooksProvider>
    <IsLoginProvider>
    <ServerProvider>
      <App />
    </ServerProvider>
    </IsLoginProvider>
    </BooksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
