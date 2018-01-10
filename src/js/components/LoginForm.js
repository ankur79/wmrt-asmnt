import React, {Component} from 'react';
import List from './List';

class LoginForm extends Component {
    state = {
        userName: "",
        passWord: "",
        disableBtn: true
    }

    verifyPassword() {
        const strongRegex = new RegExp("^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{7,})");
        const bool = strongRegex.test(this.state.passWord) && this.state.userName !== "";
        this.setState({
            disableBtn: !bool
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
        this.verifyPassword();
        event.preventDefault();
    }

    submitLogin(){

        this.props.userLogged();
    }

    render() {
        const {userName, passWord, disableBtn} = this.state;
        return (
            <div className="container-fluid form">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            value={userName}
                            placeholder="Username"
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="passWord"
                            value={passWord}
                            placeholder="Password"
                            onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <button
                        onClick={()=>this.submitLogin()}
                        className="btn btn-primary btn-submit"
                        disabled={disableBtn}>Login</button>
               
            </div>
        )
    }
}

export default LoginForm;