//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//helper imports
import axios from 'axios';

//style imports


class AddTodo extends Component {

  addTodoItem(newTodoObject){
    console.log(newTodoObject);
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/todos/',
      data: newTodoObject
    }).then( res => {
      this.props.history.push('/home');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    e.preventDefault();
    const newTodoObject = {
      title: this.refs.item.value,
    }
    this.addTodoItem(newTodoObject);
  }

  render(){
    return(
      <div>
        <br />
        <Link className = "btn grey lighten-1" to = "/home">Back</Link>
        <h2>Add Todo List</h2>
        <form onSubmit = {this.onSubmit.bind(this)}>
          <div className = "input-field">
            <input type = "text" name = "TodoItem" ref = "item" />
            <label htmlFor = "item">Todo List</label>
          </div>
          <input type = "submit" value = "Save" className = "btn" />
        </form>
      </div>
    )
  }
}

export default AddTodo;
