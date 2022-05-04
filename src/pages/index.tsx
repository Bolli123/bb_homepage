import * as React from "react"
import "../styles/index.sass"
import NavBar from "../components/navbar";
import { Link } from "gatsby";
import Layout from "../components/layout";

const aboutMes = ['Björn', 'a developer', 'an idiot', 'a big boy']

const IndexPage = () => {
  //States
  const [aboutMeIndex, setAboutMeIndex] = React.useState<number>(0)
  const [selectedAbout, setSelectedAbout] = React.useState<string>(aboutMes[0])
  const [aboutIndex, setAboutIndex] = React.useState<number>(0)
  const [typeWriterForwards, setTypeWriterForwards] = React.useState<boolean>(true)
  const [cursorBlinking, setCursorBlinking] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTimeout(() => {
      typeWriterForwards ? typeWriterAdd() : typeWriterRemove()
    }, typeWriterForwards ? 130 : 70)
  }, [aboutIndex])

  //Pause after writing a word
  React.useEffect(() => {
    if(!typeWriterForwards) {
      setTimeout(() => {
        typeWriterRemove()
      }, 3000)
      setCursorBlinking(false)
    }
  }, [typeWriterForwards])

  function typeWriterAdd() {
    if (aboutIndex < selectedAbout.length) {
      setAboutIndex(aboutIndex+1)
    }
    else {
      setTypeWriterForwards(false)
    }
  }

  function typeWriterRemove() {
    if (aboutIndex > 0) {
      if(aboutIndex-1 == 0) {
        newAboutMe()
        setTypeWriterForwards(true)
      }
      setAboutIndex(aboutIndex-1)
    }
  }
  
  function newAboutMe() {
    if (aboutMeIndex < aboutMes.length-1) {
      setAboutMeIndex(aboutMeIndex+1)
    }
    else {
      setAboutMeIndex(0)
    }
    const newMe = aboutMes[aboutMeIndex]
    setSelectedAbout(newMe)
    setCursorBlinking(true)
  }

  return (
    <Layout>
        <div className="container">
          <div className="backgroundText"> &lt;&nbsp;/&gt; </div>
          <div className="introContainer">
            <h1 className="introText">hello, world</h1>
            <span className={"typeWriter " + (cursorBlinking ? "" : "blinking")}>I'm {selectedAbout.slice(0, aboutIndex)}</span>
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
