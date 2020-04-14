//main import(s)
import React from 'react';
import ReactDOM from 'react-dom';

//helper import(s)
import axios from 'axios';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import AllTimeComponent from './components/AllTimeComponent';
import MonthComponent from './components/MonthComponent';
import TableLayout from './layouts/TableLayout'; 
import TableProps from './components/TableProps';


// TODO: Create Styling for a more UI friendly interface

ReactDOM.render(
(
  <Router history = {browserHistory}>
    <Route path ="/" component = {TableLayout}>
      <IndexRoute component = {MonthComponent}/>
      <Route path = "/AllTimeLayout" component = {AllTimeComponent} />
    </Route>
  </Router>
), document.getElementById('root'));
