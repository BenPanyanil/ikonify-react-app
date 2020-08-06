import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToitammeProvider } from './ContextAPI';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ToitammeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToitammeProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
