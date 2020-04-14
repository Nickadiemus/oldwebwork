//main import(s)
import React, {Component} from 'react';

//secondary import(s)
import '../style/NewUser.css';
import validateInput from '../validateUserData';
import classNames from 'classnames';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            isLoading: false,
            errors: {}
        }
    }

    render() {

        const {errors} = this.state;
        const userNameError = classNames({"form-group": true, "text-center": true, 'has-error': errors.username});
        const passwordError = classNames({"form-group": true, "text-center": true, 'has-error': errors.password})
        const passwordConfirmError = classNames({"form-group": true, "text-center": true, 'has-error': errors.passwordConfirm})

        return (
            <div className="NewUser">
                <form className="form-horizontal">
                    <div className={userNameError}>
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" value={this.state.username} name='username' onChange={this.handleUser.bind(this)} className="form-control" placeholder="Email"/>
                        </div>
                        {errors.username && <span className="help-block text ">{errors.username}</span>}
                    </div>
                    <div className={passwordError}>
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name='password' value={this.state.password} onChange={this.handlePassword.bind(this)} className="form-control" placeholder="Password"/>
                        </div>
                        {errors.password && <span className="help-block text ">{errors.password}</span>}
                    </div>
                    <div className={passwordConfirmError}>
                        <label className="col-sm-2 control-label">Password Verifcation</label>
                        <div className="col-sm-10">
                            <input type="password" name='passwordConfirm' value={this.state.passwordConfirm} onChange={this.handlePasswordConfirm.bind(this)} className="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                        {errors.passwordConfirm && <span className="help-block text ">{errors.passwordConfirm}</span>}
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick ={this.submit.bind(this)} disabled={this.state.isLoading} type="submit" className="btn btn-default">Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({errors});
        }

    }

    handleUser(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handlePasswordConfirm(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault()
        // TODO: Added boolean return statement from isValid()
        if (true) {
            console.log("Inside if");
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
            //promise success
            () => {
                this.props.addFlashMessage({type: 'success', text: 'Signed up Successfully, Welcome!'})
                this.context.router.history.push('/');
            },
            //errors sent back from server
            ({data}) => {
                this.setState({errors: data, isLoading: false});
            });
        }

    }

}

SignUp.contextTypes = {
    router: React.PropTypes.object.isRequired
}

SignUp.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
}
export default SignUp
