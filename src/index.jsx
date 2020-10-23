import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './App';
import VEaas from "./pages/VEaas.jsx";
import QA from "./pages/QA.jsx";
import OCAT from "./pages/OCAT.jsx";
import DevOps from "./pages/DevOps.jsx";

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
    <Route path="/VEaas" component={VEaas}/>
    <Route path="/QA" component={QA}/>
    <Route path="/OCAT" component={OCAT}/>
    <Route path="/DevOps" component={DevOps}/>
  </Router>,
  document.getElementById('root')
);


