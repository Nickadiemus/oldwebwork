//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//helper imports
import axios from 'axios';

//style imports


class TodoListDescription extends Component {

  constructor(props){
    super(props)
    this.state = {
      Description: ''
    }

  }

  componentWillMount(){
    this.getTodoLists()
  }

  onDelete(){
    let todoitemId = this.state.Description.id;
    axios.delete(`http://localhost:3000/api/todoitems/${todoitemId}`)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  getTodoLists(){
    let todolistId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/todoitems/${todolistId}`)
    .then(res => {
      console.log(res.data);
      this.setState(
        {
          Description: res.data
        }
      )
    }).catch(err => {console.log(err);})
  }

  render(){
    return(
      <div>
        <br />
        <Link to = "/" className = "btn grey lighten-1">Back</Link>
        <h3>TodoList's Name goes here</h3>
        <ul className = "collection">
          <li className = "collection-item">{this.state.Description.name}</li>
        </ul>
        <Link className = "btn" to = {`/todoitems/edit/${this.state.Description.id}`}>Edit</Link>
        <button onSubmit = {this.onDelete.bind(this)} className = "btn red right">Delete</button>
      </div>
    )
  }
}

export default TodoListDescription;
