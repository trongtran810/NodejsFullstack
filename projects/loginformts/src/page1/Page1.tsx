import { Component } from "react";
import NavBar from "../component/navbar/NavBar";
import UserProfile from "../component/userprofile/UserProfile";

const Page1 = () => {
    return (
        <>
        <NavBar/>
        <div>Page 1</div>
        <UserProfile/>
        </>
    );
}

export default Page1;