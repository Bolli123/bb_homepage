import { Link } from "gatsby"
import React from "react" 
import '../styles/navbar.sass'


const Navbar = () => {
    const activeStyle = {
        textDecoration: "underline",
        textDecorationColor: "#0078d7"
    }
    return (
        <nav className="navbarContainer">
            <Link className="logo" to="/">BB</Link>
            <Link to="/" className="link" activeStyle={activeStyle}>home</Link>
            <Link to="/projects" className="link" activeStyle={activeStyle}>projects</Link>
            <Link to="/aboutMe" className="link" activeStyle={activeStyle}>aboutme</Link>
            <Link to="/contact" className="link" activeStyle={activeStyle}>contact</Link>
        </nav>
    )
  }
  
  export default Navbar