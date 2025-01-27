import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
import { Link } from "react-router-dom";
import beer from "./../../img/beer-27.png";
import "./style.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            <img src={beer} className="beerIcon" />
            <strong>PivoZavr</strong> portfolio
          </Link>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="/" className="nav-list__link ">
                Home
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/projects" className="nav-list__link">
                Projects
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/contacts" className="nav-list__link">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
