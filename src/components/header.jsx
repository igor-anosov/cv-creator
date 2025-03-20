import profilePicture from "../assets/avatar.png";
import ContactInfo from "./contact-info";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left print--inline">
          <h1>Ihor Anosov</h1>
          <h2>Frontend Developer | React Specialist</h2>
        </div>

        <div className="header-center print--inline">
          <img
            className="profile-picture"
            src={profilePicture}
            alt="Ihor Anosov"
          />
        </div>
        <div className="header-right print--inline">
          <ContactInfo />
        </div>
      </div>
      <div className="about-me">
        <p className="with-indent">
          Hi! I'm Ihor, a Frontend Developer focused on <strong>React</strong>, I build high-performance web applications using
          advanced front-end techniques. I think every application should work <strong>smooth and fast</strong> on web and mobile as much as possible.
        </p>
        <p>
          I've developed a wide range of Single Page Applications for companies in Europe and the USA in
          <strong> <span style={{whiteSpace: "nowrap"}}>e-commerce</span></strong>, <strong>logistics</strong>, <strong>finance</strong>, <strong>automotive</strong>,
          <strong> travel</strong>, <strong>TV streaming</strong>, <strong>hotel</strong>, and other industries.
        </p>
        <p>
          In several projects I have directly contributed to <strong>business growth</strong> -
          such as boosting conversion rates (by 600%) and reducing application load times (by 75%, up to 1.8 sec).
          My experience in web development allows me to not only write efficient code but also bring valuable
          expertise in the performance, UX/UI, and accessibility optimization.
        </p>
        <p>
          If you have a project that you'd like to discuss,
          feel free to <a href="mailto:anosovigor8@gmail.com">contact me</a>! 🚀
        </p>

      </div>
    </header>
  );
};

export default Header;
