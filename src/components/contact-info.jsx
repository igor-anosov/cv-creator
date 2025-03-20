import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => (
  <ul className="contact-info">
    <li>
      {/*<a href="mailto:anosovigor8@gmail.com">anosovigor8@gmail.com</a>*/}
      <a href="mailto:ihor.anosov@capgemini.com">ihor.anosov@capgemini.com</a>
      <FontAwesomeIcon icon={faEnvelope} />
    </li>
    <li>
      +38095-752-6954
      <FontAwesomeIcon icon={faPhone} />
    </li>
    <li>
      Lviv, Ukraine
      <FontAwesomeIcon icon={faLocationDot} />
    </li>
    <li>
      <a href="https://linkedin.com/in/igor-anosov-aba7b7109">LinkedIn</a>
      <FontAwesomeIcon icon={faLinkedin} />{" "}
    </li>
    <li>
      <a href="https://github.com/igor-anosov">GitHub</a>
      <FontAwesomeIcon icon={faGithub} />{" "}
    </li>
  </ul>
);

export default ContactInfo;
