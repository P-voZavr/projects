import Project from "../components/Project/Project.jsx";
import projectList from "../helper/ProjectList.js";

function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projectList.map((idk, index) => {
              return (
                <Project
                  key={index}
                  text={idk.text}
                  img={idk.img}
                  path={idk.path}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Projects;
