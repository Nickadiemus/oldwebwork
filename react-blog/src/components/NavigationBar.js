//main import(s)
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//secondary import(s)
import logo from '../logo.svg';
import {connect} from 'react-redux'
import {logout} from '../login';

class NavigationBar extends Component {
    logout(e) {
        e.preventDefault()
        this.props.logout();
        this.context.router.history.push('/');

    }

    render() {
        const {isAuth} = this.props.auth;
        const userLinks = (
            <ul className="nav nav-pills navbar-right">
                <li role="presentation">
                    <Link to="/">Home</Link>
                </li>
                <li role="presentation">
                    <Link to="/new-blog">New Post</Link>
                </li>
                <li role="presentation">
                    <a href="#" onClick={this.logout.bind(this)}>Logout</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="nav nav-pills navbar-right">
                <li role="presentation">
                    <Link to="/">Home</Link>
                </li>
                <li role="presentation">
                    <Link to="/login">Login</Link>
                </li>
                <li role="presentation">
                    <Link to="/sign-up">Sign-Up</Link>
                </li>
            </ul>
        );
        return (
            <div className="App">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="logo">
                                <img src={logo} alt=''/>
                            </a>
                        </div>
                        <div>
                            {isAuth
                                ? userLinks
                                : guestLinks}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired

}
NavigationBar.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {auth: state.auth}
}

export default connect(mapStateToProps, {logout})(NavigationBar);
