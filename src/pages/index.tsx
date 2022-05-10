import * as React from "react"
import "../styles/index.sass"
import { Link } from "gatsby";
import Layout from "../components/layout";
import TypeWriter from "../components/typeWriter";

const IndexPage = () => {
  return (
    <Layout>
        <div className="container">
          <div className="backgroundText"> &lt;&nbsp;/&gt; </div>
          <div className="introContainer">
            <h1 className="introText">hello, world</h1>
            <TypeWriter/>
            <ul className="navigationList navigationMenu">
                <Link to="/projects" className="listItem"><li>projects</li></Link>
                <Link to="/aboutMe" className="listItem"><li>aboutMe</li></Link>
                <Link to="/contact" className="listItem"><li>contact</li></Link>
            </ul>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
