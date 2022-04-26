import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import projects from "../data/projects.json"

const Projects = () => {
  const [headerPos, setHeaderPos] = React.useState<string>('0%')

  React.useEffect(() => {
    const interval = setInterval(() => setHeaderPos(headerPos + (Math.sin(+new Date * 7) * 20) + "%"), 50);
    return () => {
      clearInterval(interval);
    };
  }, [])
    return (
      <Layout>
        <div className="container">
            <div className="backgroundText"> [&nbsp;&nbsp;] </div>
            <h1 className="header" style={{transform: 'translateY(' + headerPos + ')'}}>Projects</h1>
            <div className="allProjects">
              {Object.keys(projects).map((key, i) => (
                    <Project project={projects[i]}></Project>
                ))}
            </div>
        </div>
      </Layout>
    )
  }
  
  export default Projects