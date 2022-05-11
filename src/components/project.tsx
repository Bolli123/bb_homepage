import React from "react"
import "../styles/project.sass"
import images from "../images/imageMapper"

type ProjectProps = {
    title: string
    description: string
    image: string
    github?: string
    tags: Array<string>
    externalLink?: string
}

const Project = ({project} : {project: ProjectProps}) => {
    function handleLinks() {
        let retLinks : any = []
        if (project.externalLink) {
            retLinks.push(
                <a className="projectLink" href={project.externalLink} target="_blank" >
                    <svg
                    className="projectSVG"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
                    />
                    <path
                        d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
                    />
                    <path
                        d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
                    />
                    </svg>
                </a>
            )
        }
        if (project.github) {
            retLinks.push(
                <a className="githubSvg" id="githubSvg" href={project.github} target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
            )
        }
        return retLinks
    }
    return (
        <div className="projectContainer">
            <div className="projectImg" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), " + "url(" + (images as any)[project.image].default + ")"}}></div>
                <div className="projectInfo">
                    <p className="projectTitle">{project.title}</p>
                    <p className="projectDescription">{project.description}</p>
                    <div className="tagContainer">
                        {Object.keys(project.tags).map((key, i) => (
                            <span className="projectTag" key={i}>{project.tags[i]}</span>
                        ))}
                    </div>
                    <div className="projectLinks">
                        {handleLinks()}
                    </div>
                </div>
        </div>
    )
  }
  
  export default Project