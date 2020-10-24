import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './App';
import VEaas from "./pages/VEaas.jsx";
import QA from "./pages/QA.jsx";
import OCAT from "./pages/OCAT.jsx";
import DevOps from "./pages/DevOps.jsx";
import Btn1 from "./pages/Btn1.jsx"
import Btn2 from "./pages/Btn2.jsx"
import Btn3 from "./pages/Btn3.jsx"
import Btn4 from "./pages/Btn4.jsx"

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
    <Route path="/Btn1" component={Btn1}/>
    <Route path="/Btn2" component={Btn2}/>
    <Route path="/Btn3" component={Btn3}/>
    <Route path="/Btn4" component={Btn4}/>


  </Router>,
  document.getElementById('root')
);


