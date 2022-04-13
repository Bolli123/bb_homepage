import { Link } from "gatsby";
import * as React from "react"
import "../styles/index.sass"
import NavBar from "../components/navBar";

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
    <div className="container">
      <NavBar fsize={1.5}></NavBar>
      <div className="backgroundText"> &lt;&nbsp;/&gt; </div>
      <div className="introContainer">
        <h1 className="introText">hello, world;</h1>
        <span className={"typeWriter " + (cursorBlinking ? "" : "blinking")}>I'm {selectedAbout.slice(0, aboutIndex)}</span>
        <NavBar></NavBar>
      </div>
    </div>
  )
}

export default IndexPage
