import React from "react"
import Layout from "../components/layout"
import SpotifyFrame from "../components/spotifyFrame"
import "../styles/aboutMe.sass"

const AboutMe = () => {
    console.log(require("../images/mia.jpg"))
    return (
      <Layout>
        <div className="aboutMeWrapper">
          <div className="aboutMeContainer">
          <h1 className="header aboutIntro">Hey!</h1>
            <div className="aboutLeft">
                <h1 className="aboutInfoHeader"> I'm Björn. I live in Hafnarfjörður, Iceland and I love programming, music and food.  </h1>
                <p className="aboutInfo"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                
                <p className="aboutInfo"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
                
                <p className="aboutInfo">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div className="aboutRight">
              <img className="aboutMeImage" src={require("../images/mia.jpg").default}/>
            </div>
            <h1 className="header musicIntro">Favorite Music!</h1>
            <div className="aboutMusic">
              <SpotifyFrame title="There is a light that never goes out" altTitle="The Smiths" image="https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9" link="https://open.spotify.com/track/0WQiDwKJclirSYG9v5tayI?"/>
              <SpotifyFrame title="Deftones" altTitle="alternative metal" image="https://i.scdn.co/image/ab67616d0000b27366c9f5d6f13bfc9abedc1056" link="https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH"/>
              <SpotifyFrame title="In Utero" altTitle="Nirvana" image="https://i.scdn.co/image/ab67616d0000b273c4f52ef8782f0e8ede4c1aaf" link="https://open.spotify.com/album/7wOOA7l306K8HfBKfPoafr"/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  
  export default AboutMe