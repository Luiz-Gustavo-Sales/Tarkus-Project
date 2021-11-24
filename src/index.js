import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Login from './Components/Login/Login';
import Heeader from './Components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    {/* <Login /> */}
    <Heeader/>

  </React.StrictMode>,
  document.getElementById('root')
);
