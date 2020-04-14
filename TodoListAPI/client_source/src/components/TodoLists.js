//main imports
import React, {Component} from 'react';

//helper imports
import axios from 'axios';
import TodoListItem from './TodoListItem';

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
    axios.get('http://localhost:3000/api/todoitems')
    .then(res => {

      this.setState({
        todolist: res.data
      }, () => {
        console.log(this.state);
      })
    })
  }
  render(){
    const todoListItems = this.state.todolist.map((todo, i) => {
      return(
        <TodoListItem key = {todo.id} item = {todo}/>
      )
    })
    return(
      <div>
        <h1>TodoLists Page</h1>
        <ul className = "collection">
          {todoListItems}
        </ul>
      </div>
    )
  }
}

export default TodoLists;
