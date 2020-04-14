//main import(s)
import React, {Component} from 'react';
import {Route} from 'react-router-dom'

//secondary import(s)
import App from './App';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import NewBlog from './pages/NewBlog'

class Paths extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={NewUser}/>
                <Route path="/new-blog" component={NewBlog}/>
            </div>
        )
    }
}

export default Paths;
