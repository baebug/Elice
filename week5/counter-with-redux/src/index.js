import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import counter from './modules/counter';
import { Provider } from 'react-redux';

const store = createStore(counter); // counter => reducer 함수 이름
// console.log(store.getState());
// console.log(store.dispatch(increase()));
// console.log(store.getState());
// console.log(store.dispatch(setDiff(5)));
// console.log(store.dispatch(increase()));
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
