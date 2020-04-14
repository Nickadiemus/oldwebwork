//main import(s)
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {userLogin, setCurrentUser} from '../login.js';

//secondary import(s)
import '../style/Login.css';
import classNames from 'classnames';
import validateLoginData from '../validateLoginData';





class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state = ({
      identifier: '',
      password: '',
      isLoading: false,
      errors: {}
    })
  }

  render(){
    console.log(this.props);

    const {errors, identifier, password, isLoading, } = this.state;

    const identifierError = classNames({
      'form-group': true,
      'text-center': true,
      'has-error': errors.identifier
    });

    const passwordError = classNames({
      'form-group': true,
      'text-center': true,
      'has-error': errors.password
    });

    return(
      <div className = "Login">
        <form className="form-horizontal">

          {errors.from && <div className = 'alert alert-danger'>{errors.form}</div>}

          <div className={identifierError}>
            <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input
                 type="email"
                 name="identifier"
                 label="Email"
                 value={this.state.identifier}
                 onChange={this.handleUser.bind(this)}
                 className="form-control"
                 placeholder="Email"
               />
            </div>
            {errors.identifier && <span className = "help-block text ">{errors.identifier}</span>}
          </div>
          <div className={passwordError}>
            <label  className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePassword.bind(this)}
                className="form-control"
                placeholder="Password"
              />
            </div>
            {errors.password && <span className = "help-block text ">{errors.password}</span>}
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10 text-left">
              <button onClick = {this.submit.bind(this)} type="submit" className="btn btn-primary text-center" disabled={isLoading}>Sign in</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  isValid() {
    const {errors, isValid} = validateLoginData(this.state);

    if(!isValid){
      this.setState({
        errors
      })
    }
    return isValid;
  }

  handleUser(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handlePassword(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e){
    e.preventDefault();
    console.log(this.isValid());
    if(this.isValid()){
      this.setState({
        errors: {}, isLoading: true
      });
      this.props.userLogin(this.state).then(

        //push to homepage
        (res) => this.context.router.history.push('/'),
        ({data}) => {
          console.log('inside then')
          this.setState({errors: data.errors, isLoading: false})
        }
      );
    }
  }

}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

LoginForm.propTypes ={
  login: React.PropTypes.func.isRequired
}

export default connect(null, {userLogin})(LoginForm);
