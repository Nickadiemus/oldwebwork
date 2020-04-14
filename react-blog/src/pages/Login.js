//main import(s)
import React, {Component} from 'react';

//secondary import(s)
import NavigationBar from '../components/NavigationBar';
import LoginForm from '../components/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <LoginForm/>
            </div>
        )
    }
}

export default Login;
