import React from "react";
import { Link } from "react-router-dom";
import BubblePage from "./BubblePage";

export default function Header() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

   

    return (
        <div className="header">
            <div className="title">Bubble App</div>
            <nav className="nav-links">
                <Link className="nav-link" to ="/login">Login</Link> 
                 <Link className="nav-link" to ="/BubblePage">BubblePage</Link>
                <Link className="nav-link" to ="/AddColor">Add Color</Link>
                <Link className="nav-link" to ="/Contact">Contact</Link>
                <Link className="nav-link" to ="/login" onClick={signOut}>Sign out</Link>
            </nav>
        </div>
    )
}