import { Link } from "gatsby"
import React from "react" 
import '../styles/navBar.sass'


const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <div className="logo">BB</div>
            <div className="links">
                <Link to="/" className="link"><li>home</li></Link>
                <Link to="/projects" className="link"><li>projects</li></Link>
                <Link to="/aboutMe" className="link"><li>aboutMe</li></Link>
                <Link to="/contact" className="link"><li>contact</li></Link>
            </div>
        </nav>
    )
  }
  
  export default Navbar