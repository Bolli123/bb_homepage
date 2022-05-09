import React, { useEffect } from "react"
import BoxArray from "../components/boxArray"
import Layout from "../components/layout"
import "../styles/aboutMe.sass"

const AboutMe = () => {
    return (
      <Layout>
        <div className="aboutMeContainer">
            <div className="aboutMeLeftSide">
              <h1 className="header aboutIntro">Hey!</h1>
              <p className="aboutText"> lorem20Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className="aboutMeRightSide">
              <h1 className="header aboutIntro">Hey!</h1>
              <p className="aboutText"> lorem20Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </Layout>
    )
  }
  
  export default AboutMe