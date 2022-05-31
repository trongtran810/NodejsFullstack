import { Component } from "react";
import LoginInput from "../component/logininput/LoginInput";
import NavBar from "../component/navbar/NavBar";

class Login extends Component {
    render(){
        return (
            <>
            <NavBar/>
            <div>Login page</div>
            <LoginInput/>
            </>
        );
    }
}

export default Login;