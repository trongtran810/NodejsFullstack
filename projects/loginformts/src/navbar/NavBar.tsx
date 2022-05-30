import { Link } from "react-router-dom";

const NavBar = () => {
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
        <hr/>
        </>
    );
}

export default NavBar;