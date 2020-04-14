//main imports
import React, {Component} from 'react';
import TodoListItem from './TodoListItem';
//helper imports
import axios from 'axios';
import {Link} from 'react-router-dom';



//style imports


class TodoLists extends Component {
  constructor(){
    super();
    this.state = {
      todolist: []
    }
  }

  componentWillMount(){
    this.getTodoLists();
  }

  getTodoLists(){
    axios.get('http://localhost:3000/api/todos')
    .then(res => {
      console.log(res.data);

      this.setState({
        todolist: res.data
      }, () => {
        console.log(this.state);
      })

    })
  }
  render(){
    const TodoObjects = this.state.todolist.map((todo, i) => {
      return(
        <TodoListItem key = {todo.id} item = {todo} />
      )
    })
    return(
      <div>
        <ul className = "collection with-header">
          <li className = "collection-header"><h1>TodoLists Page</h1></li>
          {TodoObjects}
        </ul>
        <div className = "fixed-action-btn">
          <Link to = "/todoitems/add" className = "btn-floating btn-large blue lighten-2"><i className = "fa fa-plus"></i></Link>
        </div>
      </div>
    )
  }
}

export default TodoLists;
