//main imports
import React, {Component} from 'react';
//helper imports
import { Link } from 'react-router-dom';

//style imports
import '../style/navbar.css';
import foojilogo from '../foojilogo.svg';



class Navbar extends Component {
  
  render(){
    return(
      <div>
        <nav className="blue lighten-3">
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo center foojilogo"><img src = {foojilogo} alt = "logo" /></a>
            <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li><Link to = "/home"><i className = "fa fa-list"></i> TodoLists</Link></li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li><Link to = "/home"><i className = "fa fa-list"></i> TodoLists</Link></li>
              <li><Link to = "/todoitems/add"><i className = "fa fa-list"></i> Add TodoItem</Link></li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
