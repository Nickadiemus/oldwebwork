//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//helper imports

//style imports


class TodoListItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      item: props.item
    }

  }

  render(){
    return(
      <li className = "collection-item">
        <Link to = {`/todoitems/${this.state.item.id}`}>{this.state.item.name}</Link>
      </li>
    )
  }
}

export default TodoListItem;
