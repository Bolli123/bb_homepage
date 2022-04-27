import React from "react"
import BoxArray from "../components/boxArray"
import Layout from "../components/layout"
import "../styles/aboutMe.sass"

const AboutMe = () => {
    return (
      <Layout>
        <div>
            <h1 className="header">About me</h1>
            <p className="aboutText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <BoxArray/>
      </Layout>
    )
  }
  
  export default AboutMe