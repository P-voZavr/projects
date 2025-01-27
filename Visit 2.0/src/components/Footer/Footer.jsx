import "./style.css";

import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import tw from "./../../img/icons/twitter.svg";
import github from "./../../img/icons/gitHub.svg";
import lnk from "./../../img/icons/linkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={tw} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={lnk} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 i chto pisat?</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
