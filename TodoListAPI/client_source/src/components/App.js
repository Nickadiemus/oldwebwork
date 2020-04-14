import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { Link } from 'react-router-dom'

const App = () => (
  <div>
    <Navbar />
    <div className = "container">
      <Main />
    </div>
    <div className = "fixed-action-btn">
      <Link to = "/todoitems/add" className = "btn-floating btn-large blue lighten-2"><i className = "fa fa-plus"></i></Link>
    </div>
  </div>
)

export default App;
