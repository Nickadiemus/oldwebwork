//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//helper imports
import axios from 'axios';

//style imports


class AddTodo extends Component {

  addTodoItem(newTodoItem){
    console.log(newTodoItem);
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/todoitems',
      data: newTodoItem
    }).then( res => {
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    e.preventDefault();
    const newTodoItem = {
      name: this.refs.item.value,
      group: this.refs.group.value
    }
    this.addTodoItem(newTodoItem);
  }

  render(){
    return(
      <div>
        <br />
        <Link className = "btn grey lighten-1" to = "/">Back</Link>
        <h2>Add Todo Item</h2>
        <form onSubmit = {this.onSubmit.bind(this)}>
          <div className = "input-field">
            <input type = "text" name = "TodoItem" ref = "item" />
            <label htmlFor = "item">Item</label>
          </div>
          <div className = "input-field">
            <input type = "text" name = "TodoItem" ref = "group" />
            <label htmlFor = "item">Group</label>
          </div>
          <input type = "submit" value = "Save" className = "btn" />
        </form>
      </div>
    )
  }
}

export default AddTodo;
