import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Info from './Info'
import AddTodo from './AddTodo';
import TodoLists from './TodoLists';
import TodoListItem from './TodoListItem';
import TodoListDescription from './TodoListDescription';
import EditTodoItem from './EditTodoItem';

// <Route exact path = "/" component = {Instructions}/>
const Main = () => (
  <main>
    <Switch>
      <Route exact path = "/" component = {Info} />
      <Route exact path = "/home" component = {TodoLists}/>
      <Route exact path = "/TodoListItem" component = {TodoListItem} />
      <Route exact path = "/todoitems/add/" component = {AddTodo} />
      <Route exact path = "/todoitems/edit/:id" component = {EditTodoItem} />
      <Route exact path = "/todos/:id" component = {TodoListDescription}/>
    </Switch>

  </main>
)

export default Main;
