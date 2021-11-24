import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
ReactDOM.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Header/>

  </React.StrictMode>,
  document.getElementById('root')
);
