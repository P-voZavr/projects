import Github from "./../img/icons/gitHub-black.svg";
import projectsList from "../helper/ProjectList";
import { useParams } from "react-router-dom";
function ProjectPage() {
  const { id } = useParams();
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projectsList[id].text}</h1>

          <img
            src={projectsList[id].img}
            alt=""
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{projectsList[id].skills}</p>
          </div>

          <a href={projectsList[id].repo} className="btn-outline">
            <img src={Github} alt="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
}
export default ProjectPage;
