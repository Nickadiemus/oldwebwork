//main imports
import React, {Component} from 'react';

//helper imports
import {Link} from 'react-router-dom';

//style imports


class Info extends Component {
  render(){
    return(
      <div className = "container center">
        <div className = "">
          <h1 className = "grey lighten-3"><strong>Todo Application</strong></h1>
        </div>
        <Link to = "/home" class="btn btn-floating btn-large pulse blue lighten-3"><i className = "large material-icons">arrow_forward</i></Link>
      </div>
    )
  }
}

export default Info;
