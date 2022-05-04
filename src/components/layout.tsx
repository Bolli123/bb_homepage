import React from "react" 
import Navbar from "./navbar"

type ChildrenProps = {
    children: React.ReactNode
}

const Layout = ({ children }: ChildrenProps ) => {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <footer className="footer">
                Designed and implemented by Björn Breki
            </footer>
        </div>
    )
  }
  
  export default Layout