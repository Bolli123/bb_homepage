import React from "react"
import "../styles/boxArray.sass"

const BoxArray = () => {
    function generateBoxes(size: number) {
        let boxes = []
        for(let i = 0; i < size; i++) {
            boxes.push(<div className="box"></div>)
        }
        console.log("generated new boxes")
        return boxes
    }
    return (
      <div className="boxArrayContainer">
          {generateBoxes(1200)}
      </div>
    )
  }
  
  export default BoxArray