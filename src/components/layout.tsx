import React from "react" 
import Navbar from "./navbar"
import { Helmet } from "react-helmet"

type LayoutProps = {
    children: React.ReactNode,
    titleHeader: string,
    route?: string
}

const Layout = ({ children, titleHeader, route }: LayoutProps ) => {
    return (
        <div className="layout">
            <Helmet htmlAttributes={{lang: "en"}}>
                <meta charSet="utf-8"/>
                <title>Björn Breki - {titleHeader}</title>
                <link rel="canonical" href={"https://bjornbreki.is/" + route} />
            </Helmet>
            <Navbar/>
            <div className="content">
                { children }
            </div>
        </div>
    )
  }
  
  export default Layout