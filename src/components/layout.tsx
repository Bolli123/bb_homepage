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
        </div>
    )
  }
  
  export default Layout