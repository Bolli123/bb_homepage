import React from "react"

const aboutMes = ['a developer', 'Björn']

const TypeWriter = () => {
      //States
  const [aboutMeIndex, setAboutMeIndex] = React.useState<number>(0)
  const [selectedAbout, setSelectedAbout] = React.useState<string>(aboutMes[1])
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
        <span className={"typeWriter " + (cursorBlinking ? "" : "blinking")}>I'm {selectedAbout.slice(0, aboutIndex)}</span>
    )
  }
  
  export default TypeWriter