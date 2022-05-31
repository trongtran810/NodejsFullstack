import { Component } from "react";

class LoginInput extends Component {
    render(){
        return (
            <>
                <label htmlFor="username">Username&nbsp;</label>
                <input type="text" id="username" name="username"/><br/>
                <label htmlFor="password">Password&nbsp;&nbsp;</label>
                <input type="password" id="password" name="password"/><br/>
                <button>Login</button>
            </>
        );
    }
}

export default LoginInput;