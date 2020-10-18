import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './App';
import VEaas from "./pages/VEaas.js";


//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
    <Route path="/land" component={VEaas}/>
  </Router>,
  document.getElementById('root')
);


