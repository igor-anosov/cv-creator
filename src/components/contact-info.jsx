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
      <a href="mailto:anosovigor8@gmail.com">anosovigor8@gmail.com</a>
      <FontAwesomeIcon icon={faEnvelope} />
    </li>
    <li>
      <a href="tel:+38095-752-6954">+38095-752-6954</a>
      <FontAwesomeIcon icon={faPhone} />
    </li>
    <li>
      Lviv, Ukraine
      <FontAwesomeIcon icon={faLocationDot} />
    </li>
    <li>
      <a href="https://www.linkedin.com/in/ihor-anosov-aba7b7109/" target="_blank" rel="noreferrer">LinkedIn</a>
      <FontAwesomeIcon icon={faLinkedin} />{" "}
    </li>
    <li>
      <a href="https://github.com/igor-anosov" target="_blank" rel="noreferrer">GitHub</a>
      <FontAwesomeIcon icon={faGithub} />{" "}
    </li>
  </ul>
);

export default ContactInfo;
