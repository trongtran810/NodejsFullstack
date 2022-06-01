import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LogoutButton from "../logoutbutton/logoutbutton";

const NavBar = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <>
        <div>Nav bar</div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/page1">Page 1</Link>
        <br/>
        <Link to="/page2">Page 2</Link>
        <br/>
        { !isAuthenticated ? '' : <LogoutButton/>}
        <hr/>
        </>
    );
}

export default NavBar;