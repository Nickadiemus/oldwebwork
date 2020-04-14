//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//helper imports

//style imports


class TodoListItem extends Component {

  constructor(props){
    super(props)
    console.log(props);
    this.state = {
      item: props.item

    }
  }

  render(){
    return(
      <li className = "collection-item">
        <Link to = {`/todos/${this.state.item.id}`}>{this.state.item.title}</Link>
      </li>
    )
  }
}

export default TodoListItem;
