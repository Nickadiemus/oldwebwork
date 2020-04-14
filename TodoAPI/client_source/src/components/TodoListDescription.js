//main imports
import React, {Component} from 'react';
import TodoItem from './TodoItem';
//helper imports
import axios from 'axios';
import {Link} from 'react-router-dom';

//style imports
import '../style/todolistdescription.css'

class TodoListTodoObject extends Component {

  constructor(props){
    console.log("inside TodoListTodoObject");
    super(props)
    this.state = {
      loading: false,
      TodoObject: '',
      Toggled: false
    }

  }

  componentWillMount(){
    this.setState({
      loading: true
    })
    this.getTodoLists();
  }
  /*
    handleComplete():
    @
  */

  handleComplete(TodoItem){
    console.log("HANDLECOMPLETE() TodoListDescription: This is the passed TodoItem", TodoItem);
    //creates new TodoObject for state change
    var newTodoObject = this.state.TodoObject;
    //gets the TodoItems array
    var updateItem = this.state.TodoObject.todoItems;
    //value to find index
    var val = TodoItem.id;
    //finds index of matched value
    var index = updateItem.findIndex((item, i) => {
      return item.id === val;
    });
    //only updates if value is found
    if(index !== -1){
      newTodoObject.todoItems[index] = TodoItem;
      console.log("HANDLECOMPLETE() TodoListDescription: This is new State Object", newTodoObject);
      this.setState({
        TodoObject: newTodoObject
      }, () => {
        axios.request({
          method: 'put',
          url: `http://localhost:3000/api/todos/${this.state.TodoObject.id}/items/${val}`,
          data: TodoItem
        }).then( res => {
          this.props.history.push(`/todos/${this.state.TodoObject.id}`)
        })
        .catch(err => console.log(err));

      })
    }

    return 1;
  }
  /*
    handleDelete():
    @
  */
  handleDelete(TodoObjectId, TodoItemId){
    axios.delete(`http://localhost:3000/api/todos/${TodoObjectId}/items/${TodoItemId}`)
      .then(res => {
        //creates new TodoObject for state change
        var newTodoObject = this.state.TodoObject;
        //gets the TodoItems array
        var deleteTodoItems = this.state.TodoObject.todoItems;
        //value to find index
        var val = TodoItemId;
        //finds index of matched value
        var index = deleteTodoItems.findIndex((item, i) => {
          return item.id === val;
        });
        //only deletes if value is found
        if(index !== -1){
          console.log("This is the Original Object", newTodoObject);
          deleteTodoItems.splice(index, 1);

          newTodoObject.todoItems = deleteTodoItems;

          console.log("This is the New TodoObject", newTodoObject);
        }
        this.props.history.push(`/todos/${this.props.TodoObjectId}`);
      })
      .catch(err => console.log(err));

  }

  deleteTodoObject(){
    console.log("DeleteTodoObject");
    console.log(this.state);
    const TodoObjectId = this.state.TodoObject.id;
    axios.delete(`http://localhost:3000/api/todos/${TodoObjectId}`)
    .then(res =>{
      this.props.history.push('/home')
    })
    .catch(err => console.log(err));
  }

  getTodoLists(){
    let todolistId = this.props.match.params.id
    axios.get(`http://localhost:3000/api/todos/${todolistId}`)
    .then(res => {
      console.log("This is the Data",res.data);
      this.setState(
        {
          TodoObject: res.data,
          loading: false,
          Toggled: false
        }, () => {
          console.log("This is the State", this.state);
        }
      )
    }).catch(err => {console.log(err);})
  }

  toggleAdd(){
    this.setState({
      Toggled: !this.state.Toggled
    },() => {
      console.log("This is the new State", this.state);
    } )
  }

  onSubmit(e){
    e.preventDefault();
    const newTodoItem = {
      content: this.refs.item.value,
      complete: false
    }
    axios.request({
      method: 'post',
      url: `http://localhost:3000/api/todos/${this.state.TodoObject.id}/items`,
      data: newTodoItem
    }).then(res => {
      console.log(newTodoItem);
      this.getTodoLists();
    }).catch(err => console.log(err));
  }

  render() {
    //conditional to wait for asynch GET request
    if (this.state.loading) {
      return <div></div>;
    }
    else if(this.state.Toggled){
      //populates Todoitems to render in the collection
      const TodoObjects = this.state.TodoObject.todoItems.map((todoitem, i) =>{
        return(
          <TodoItem TodoObjectId = {this.state.TodoObject.id} key = {todoitem.id} item = {todoitem} handleComplete = {this.handleComplete.bind(this)} handleDelete = {this.handleDelete.bind(this)} />
        )
      });
      return (
        <div>
          <br />
          <div>
            <Link to = "/home" className = "btn grey lighten-1">Back</Link>
            <ul className = "collection with-header">
              <li className = "collection-header"><h3>{this.state.TodoObject.title}</h3></li>
              {TodoObjects}
            </ul>
          </div>
          <form onSubmit = {this.onSubmit.bind(this)}>
            <div className = "input-field">
              <input type = "text" name = "name" ref = "item" />
              <label htmlFor = "item">Item</label>
            </div>
            <input type = "submit" value = "Add" className = "btn" />
          </form>
        </div>
      );
    }
    else{
      //populates Todoitems to render in the collection
      const TodoObjects = this.state.TodoObject.todoItems.map((todoitem, i) =>{
        return(
          <TodoItem TodoObjectId = {this.state.TodoObject.id} key = {todoitem.id} item = {todoitem} handleComplete = {this.handleComplete.bind(this)} handleDelete = {this.handleDelete.bind(this)} />
        )
      });

      return (
        <div>
          <br />
          <div>
            <Link to = "/home" className = "btn grey lighten-1">Back</Link>
            <ul className = "collection with-header">
              <li className = "collection-header"><h3>{this.state.TodoObject.title}</h3></li>
              {TodoObjects}
            </ul>
            <button className = "btn right deleteButton" onClick={this.toggleAdd.bind(this)} >Add Item</button>
            <button onClick = {this.deleteTodoObject.bind(this)} className = "btn red right deleteButton">Delete</button>
          </div>
        </div>
      );
    }
    }

}

export default TodoListTodoObject;
