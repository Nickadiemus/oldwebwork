//main imports
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//helper imports

//style imports
import '../style/todoitem.css'

class TodoItem extends Component {

  constructor(props){
    super(props)
    console.log("These are the props", props);
    this.state = {
      item: props.item,
      complete: props.item.complete
    }
  }

  onDelete() {
    let TodoObjectId = this.props.TodoObjectId; //gets TodoObject ID to pass up
    let TodoItemId = this.props.item.id;        //gets TodoItem ID to pass up
    //calls handleDelete from TodoListDescription.js
    this.props.handleDelete(TodoObjectId, TodoItemId);
  }

  //changes state of complete which completes the conditional render for each TodoItem
  handleComplete(){
    var complete = !this.state.item.complete
    var newItem = this.state.item;
    newItem.complete = !newItem.complete

    this.setState({
      item: newItem,
      complete: complete
    }, () => {
      this.props.handleComplete(this.state.item)
    });


  }

  //Conditional Render
  render(){
    console.log(this.state.complete);
    if(!this.state.complete){
      return(
        <li className = "collection-item red" onClick = {this.handleComplete.bind(this)}>
          <a className = "TodoItemText">{this.state.item.content}</a>
          <a><i className = "fa fa-times-circle right TodoItemText"></i></a>
          <a onClick = {this.onDelete.bind(this)} ><i className = "fa fa-trash-o right TodoItemText"></i></a>
          <Link to = "/"><i className = "fa fa-pencil right TodoItemText"></i></Link>
        </li>
      )
    }
    else{
      const TodoItem = this.state.item.content
      return(
      <li className = "collection-item green"  onClick = {this.handleComplete.bind(this)} >
        <a className = "TodoItemText" >{TodoItem}</a>
        <a><i className = "fa fa-check right TodoItemText"></i></a>
        <a onClick = {this.onDelete.bind(this)} ><i className = "fa fa-trash-o right TodoItemText"></i></a>
        <Link to = "/"><i className = "fa fa-pencil right TodoItemText"></i></Link>
      </li>
      )
    }
  }
}

export default TodoItem;
