import project from "../public/content/databases.json"
  
function ProjectPage({project}) {

    console.log(project)
    return (
      <div>
        {project ? (
          <div>
            <h1>{project.title}</h1>
            <p>Date: {project.date}</p>
            <p>Description: {project.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  

export default ProjectPage;