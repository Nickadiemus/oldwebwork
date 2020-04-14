//main imports
import React, {Component} from 'react';
//helper imports
import { Link } from 'react-router-dom';

//style imports
import foojilogo from '../foojilogo.svg';


class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className="blue lighten-2.5">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center"><img src = {foojilogo} /></a>
            <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li><Link to = "/"><i className = "fa fa-list"></i> TodoLists</Link></li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li><Link to = "/"><i className = "fa fa-list"></i> TodoLists</Link></li>
              <li><Link to = "/todoitems/add"><i className = "fa fa-list"></i> Add TodoItem</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
