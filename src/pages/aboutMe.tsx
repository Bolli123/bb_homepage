import React from "react"
import BoxArray from "../components/boxArray"
import Layout from "../components/layout"
import "../styles/aboutMe.sass"

const AboutMe = () => {
    return (
      <Layout>
        <div>
          <div className="backgroundText">About</div>
            <h1 className="header">Hey!</h1>
            <p className="aboutText"> lorem20Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/3w5Ekq9O8g0gGFEsT77Ydi?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        
      </Layout>
    )
  }
  
  export default AboutMe