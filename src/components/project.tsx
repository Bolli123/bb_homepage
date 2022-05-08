import React from "react"
import "../styles/project.sass"
import images from "../images/imageMapper"

type ProjectProps = {
    title: string
    description: string
    image: string
    links: Array<string>
    tags: Array<string>
}

const Project = ({project} : {project: ProjectProps}) => {
    return (
        <div className="projectContainer">
            <div className="projectImg" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), " + "url(" + (images as any)[project.image].default + ")"}}></div>
                <div className="projectInfo">
                    <p className="projectTitle">{project.title}</p>
                    <p className="projectDescription">{project.description}</p>
                    <div className="tagContainer">
                        {Object.keys(project.tags).map((key, i) => (
                            <span className="projectTag" key={key+1}>{project.tags[i]}</span>
                        ))}
                    </div>
                </div>
        </div>
    )
  }
  
  export default Project