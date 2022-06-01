import { Component } from "react";
import LoginButton from "../component/loginbutton/LoginButton";
import LoginInput from "../component/logininput/LoginInput";
import LogoutButton from "../component/logoutbutton/logoutbutton";
import NavBar from "../component/navbar/NavBar";

class Login extends Component {
    render(){
        return (
            <>
            <NavBar/>
            <div>Login page</div>
            <LoginInput/>
            <LoginButton/>
            <LogoutButton/>
            </>
        );
    }
}

export default Login;