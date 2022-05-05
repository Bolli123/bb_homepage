import { Link } from "gatsby"
import React from "react" 
import '../styles/navbar.sass'


const Navbar = () => {
    const [hamburgerActive, setHamburgerActive] = React.useState<boolean>(false) 
    function handleBurgerMenuClick() {
        setHamburgerActive(!hamburgerActive)
    }
    return (
        <nav className="navbarContainer">
            <Link to="/" className="logoContainer"> 
            <svg className="personalLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 1100">
                <path d="M313.57 1072.18l-199.32 0c-44.85,0 -76.73,-9.92 -95.85,-29.98 -19.12,-20.08 -28.81,-52.18 -28.81,-95.85l0 -762.58c0,-44.62 9.92,-76.73 29.51,-96.34 19.6,-19.59 51.23,-29.51 95.15,-29.51l327.9 0 0 -0.02 319.99 0 2.06 0 143.7 0 184.95 0c48.4,0 90.41,3.08 125.83,8.98 35.66,6.14 67.53,17.47 95.62,34.7 24.08,14.18 45.09,32.35 63.74,54.31 18.43,21.95 32.35,46.03 42.03,72.48 9.67,26.67 14.64,54.53 14.64,84.04 0,101.53 -50.76,175.89 -152.28,222.88 133.39,42.49 199.97,124.89 199.97,247.66 0,56.67 -14.64,107.9 -43.67,153.23 -29.05,45.56 -68.23,79.08 -117.59,100.57 -30.92,12.98 -66.34,22.2 -106.47,27.39 -40.14,5.43 -87.12,8.03 -140.48,8.03l-68.33 0 0 0.13 -692.29 0 0 -0.12zm745.28 -450.48l-213.9 0 0 296.06 220.74 0c139.06,0 208.47,-50.05 208.47,-150.15 0,-51.25 -17.93,-88.3 -54.06,-111.44 -35.88,-22.91 -89.72,-34.47 -161.25,-34.47zm-213.9 -409.39l0 262.07 188.4 0c51.23,0 90.65,-4.96 118.53,-14.64 28.09,-9.68 49.33,-28.1 64.21,-55.24 11.56,-19.36 17.23,-41.09 17.23,-64.93 0,-51.23 -18.18,-85.23 -54.78,-102 -36.35,-16.76 -92.07,-25.26 -166.67,-25.26l-166.92 0zm-436.05 409.41l-213.9 0 0 296.05 220.75 0c139.05,0 208.46,-50.04 208.46,-150.14 0,-51.25 -17.93,-88.31 -54.05,-111.45 -35.89,-22.9 -89.73,-34.46 -161.26,-34.46zm-213.9 -409.39l0 262.07 188.4 0c51.23,0 90.65,-4.97 118.53,-14.64 28.09,-9.69 49.34,-28.11 64.21,-55.24 11.56,-19.36 17.23,-41.1 17.23,-64.94 0,-51.23 -18.18,-85.22 -54.77,-101.99 -36.36,-16.76 -92.08,-25.26 -166.68,-25.26l-166.92 0z"/>
            </svg>
            </Link>
            <div className={"linksContainer" + (hamburgerActive ? "" : " hiddenLinks")} style={{visibility: (hamburgerActive ? "visible" : "hidden")}}>
                <div className="links">
                    <Link to="/" className="link" activeClassName="activeLink">home</Link>
                    <Link to="/projects" className="link" activeClassName="activeLink">projects</Link>
                    <Link to="/aboutMe" className="link" activeClassName="activeLink">aboutMe</Link>
                    <Link to="/contact" className="link" activeClassName="activeLink">contact</Link>
                    <div className="socials">
                        <a className="navGithub" href="https://github.com/bjornt18" target="_blank" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        </a>
                        <a href="https://www.instagram.com/bjornbreki/" target="_blank" >
                            <svg className="navInstagram" viewBox="0 0 50 50" width="30px" height="30px">
                                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div tabIndex={0} onClick={() => handleBurgerMenuClick()} className="hamburgerMenuContainer">
                <div className={"hamburgerMenu"  + (hamburgerActive ? " hamburgerActive" : "")}></div>
            </div>
        </nav>
    )
  }
  
  export default Navbar