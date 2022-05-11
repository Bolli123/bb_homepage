import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import projects from "../data/projects.json"

const Projects = () => {
    return (
      <Layout titleHeader="Projects" route="projects">
        <div className="container">
            <div className="backgroundText hidden"> [&nbsp;&nbsp;] </div>
            <h1 className="header">Projects</h1>
            <div className="allProjects">
              {Object.keys(projects).map((key, i) => (
                    <Project key={key+1} project={projects[i]}></Project>
                ))}
            </div>
        </div>
      </Layout>
    )
  }
  
  export default Projects