import { Link } from "gatsby"
import React from "react" 
import '../styles/navBar.sass'

type NavBarProps = {
    fsize?: number
}

const NavBar = ({fsize}: NavBarProps) => {
    return (
        <ul className="navigationList navigationMenu" style={{fontSize: fsize + "rem"}}>
            <Link to="/projects" className="navItem"><li>projects</li></Link>
            <Link to="/aboutMe" className="navItem"><li>aboutMe</li></Link>
            <Link to="/contact" className="navItem"><li>contact</li></Link>
        </ul>
    )
  }
  
  export default NavBar