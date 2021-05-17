import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Dima" },
  { id: 3, name: "Vika" },
  { id: 4, name: "Sveta" },
];

let messageData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Yo" },
  { id: 3, message: "Hello" },
  { id: 4, message: "World" },
];

let postData = [
  { id: 1, like: 10, message: "Hi" },
  { id: 2, like: 14, message: "Yo" },
  { id: 3, like: 7, message: "Hello" },
  { id: 4, like: 6, message: "World" },
];

ReactDOM.render(
  <React.StrictMode>
    <App 
      dialogs={dialogsData}
      messages={messageData}
      posts={postData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
