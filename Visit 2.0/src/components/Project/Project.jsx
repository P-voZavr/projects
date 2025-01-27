import "./style.css";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <li className="project">
      <Link to={props.path}>
        <img src={props.img} alt="Project img" className="project__img" />
        <h3 className="project__title">{props.text}</h3>
      </Link>
    </li>
  );
}

export default Project;
