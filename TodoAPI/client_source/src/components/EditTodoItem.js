//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//helper imports
import axios from 'axios';

//style imports


class EditTodoItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      group: '',
      id: ''
    }
    this.onHandleInput = this.onHandleInput.bind(this);
  }

  componentWillMount(){
    console.log(this.state);
    this.getTodoLists();
  }

  editNewTodoItem(newTodoItem){
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/todoitems/${this.state.id}`,
      data: newTodoItem
    }).then(res => {
      this.props.history.push('/')
    }).catch(err => console.log(err));
  }

  getTodoLists(){
    let todolistId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/todoitems/${todolistId}`)
    .then(res => {
      console.log(res);
      this.setState({
        name: res.data.name,
        group: res.data.group,
        id: res.data.id
      }, () => {
        console.log(this.state);
      });
    }).catch(err => {console.log(err);})
  }

  onSubmit(e){
    e.preventDefault();
    const newTodoItem = {
      name: this.refs.item.value,
      group: this.refs.group.value
    }
    this.editNewTodoItem(newTodoItem);
  }

  onHandleInput(e){
      const target = e.target
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

  render(){

    return(
      <div>
        <br />
        <Link className = "btn grey lighten-1" to = "/back">Back</Link>
        <h2>Edit Todo Item</h2>
        <form onSubmit = {this.onSubmit.bind(this)}>
          <div className = "input-field">
            <input type = "text" name = "name" value = {this.state.name} onChange = {this.onHandleInput} ref = "item" />
            <label htmlFor = "item">Item</label>
          </div>
          <div className = "input-field">
            <input type = "text" name = "group" value = {this.state.group} onChange = {this.onHandleInput} ref = "group" />
            <label htmlFor = "item">Group</label>
          </div>
          <input type = "submit" value = "Save" className = "btn" />
        </form>
      </div>
    )
  }
}

export default EditTodoItem;
