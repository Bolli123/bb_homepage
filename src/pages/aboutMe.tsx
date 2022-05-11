import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SpotifyFrame from "../components/spotifyFrame"
import "../styles/aboutMe.sass"

const AboutMe = () => {
    return (
      <Layout titleHeader="About Me" route="aboutMe">
        <div className="aboutMeWrapper">
          <div className="aboutMeContainer">
          <h1 className="header aboutIntro">Hey!</h1>
            <div className="aboutLeft">
                <h1 className="aboutInfoHeader"> I'm Björn. I live in Hafnarfjörður, Iceland. I love programming, music and food.  </h1>
                <p className="aboutInfo"> I'm {new Date().getFullYear() - 1998} years old and recently graduated from <a href="https://www.ru.is/" className="hyperlink">Reykjavík University</a> with a BSc. in Computer Science, I love all manner of software development and thrive on problem solving. </p>
                
                <p className="aboutInfo"> When I'm not coding, I love to make and eat food, play guitar, listen to music and play video games. The only pictures I have on my phone are of my dog <b>Mía</b>, so why not share one here.  </p>
                
                <p className="aboutInfo">If you have any questions, concerns or just want to chat, please do not hesitate to <Link className="hyperlink" to="/contact">contact me</Link>. </p>
            </div>
            <div className="aboutRight">
              <img className="aboutMeImage" src={require("../images/mia.jpg").default}/>
            </div>
            <h1 className="header musicIntro">Favorite Music</h1>
            <div className="aboutMusic">
              <div>
                <div className="spotifyFrameInfo">Track</div>
                <SpotifyFrame title="There is a light that never goes out" altTitle="The Smiths" image="https://i.scdn.co/image/ab67616d0000b273ada101c2e9e97feb8fae37a9" link="https://open.spotify.com/track/0WQiDwKJclirSYG9v5tayI?"/>
              </div>
              <div>
                <div className="spotifyFrameInfo">Artist</div>
                <SpotifyFrame title="Deftones" altTitle="alternative metal" image="https://i.scdn.co/image/ab67616d0000b27366c9f5d6f13bfc9abedc1056" link="https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH"/>
              </div>
              <div>
                <div className="spotifyFrameInfo">Album</div>
                <SpotifyFrame title="In Utero" altTitle="Nirvana" image="https://i.scdn.co/image/ab67616d0000b273c4f52ef8782f0e8ede4c1aaf" link="https://open.spotify.com/album/7wOOA7l306K8HfBKfPoafr"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  
  export default AboutMe