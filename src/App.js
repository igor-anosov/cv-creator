import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "./App.css";
import {Header, Job, Section, Skills, TitledList} from "./components";

const hardSkills = [
  "React",
  "JavaScript (ES6+)",
  "TypeScript",
  "Responsive Design",
  "Redux",
  "Redux Saga",
  // "Zustand",
  "WebPack",
  "HTML5",
  "CSS3/CSS4",
  "Tailwind CSS",
  "RESTful APIs",
  "Node.js",
  // "NextJS",
  "Git",
  "Agile/SCRUM",
  "Design Patterns",
  // "Microfrontend",
  "Performance Optimization",
  "Jest",
  "Vite",
  "React Testing Library",
  "Error Handling",
  // "MongoDB",
  // "Mongoose",
  "A11y (WCAG)",
  "E-commerce",
  // "WordPress, Woocommerce",
  // "SEO",
  // "SPA Architecture",
];

const softSkills = [
  "Management & Development",
  "Teamwork & Collaboration",
  "Adaptability",
  "Empathy & Emotional Intelligence",
  "Active Listening",
  "Communication",
  "Effective Writing",
  "Problem-Solving",
  "Critical Thinking",
  "Attention to Detail",
  "Continuous Learning ",
  "Mentorship & Knowledge Sharing",
];

const familiarity = [
  "React Native",
  "GraphQL",
  "Docker",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "AWS",
  "Azure",
  "WebSockets",
];

const certificates = [
  "Sustainability Awareness (03/2024) - Capgemini Engineering",
  "Global Industry Level 2 (L2) Certification in Tech & Digital Platforms (11/2024) - Capgemini Engineering",
  "Quick Service Restaurant - L1 Beginner (09/2024) - Capgemini Engineering",
  "React - The Complete Guide (incl Hooks, React Router, Redux) (09/2023) - Coursera",
  "Agile Scrum Foundation (07/2019) - Udemy",
  "Modern React with Redux (07/2017) - Udemy",
];

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ contentRef: componentRef });

  return (
    <div className="App">
      <div className="resume-container" ref={componentRef}>
        <Header />

        <div className="main-content">
          <Section title="Work Experience">
            <Job
              title="Software Engineer - Capgemini Engineering"
              location="Lviv, Ukraine"
              period="10/2021 – Present"
              achievements={[
                "Led UI development for a Large-Scale logistics platform.",
                "Key role in UI development for a major fashion retailer.",
                "Streamlined Complex User Flows with React and custom UI framework Amiga.",
                "Improved an error handling within the app so the UX was more stable and reliable.",
                "Earned the Global Industry Level 2 (L2) Certification in Tech & Digital Platforms, an industry-recognized qualification in modern digital solutions.",
              ]}
            />
            <Job
              title="Software Engineer - EPAM Systems"
              location="Lviv, Ukraine"
              period="08/2018 – 10/2021"
              achievements={[
                "Key role in the development of SSR web applications for large European companies.",
                "Contributed to successful deployment of two major projects within strict deadlines.",
                "Business trip to Denmark to collaborate with Danfoss Co.",
                "Lecturer for EPAM JSLab Course.",
              ]}
            />
            <Job
              title="Front-End Developer - Light IT"
              location="Zaporizhzhia, Ukraine"
              period="08/2015 – 08/2018"
              achievements={[
                "Learned ReactJS, successfully suggested its use in UI development to a customer, and implemented my first React class components.",
                "Promoted from Junior to Middle Developer in a few months.",
                "Developed a high-load CMS for Scandinavian e-commerce market.",
                "Mentored newcomers in HTML5/CSS3 and JavaScript basics.",
              ]}
            />
            <Job
              title="Junior Full Stack developer - BestWebSoft"
              location="Zaporizhzhia, Ukraine"
              period="09/2013 – 08/2015"
              achievements={[
                "I studied independently HTML/CSS layout techniques and Wordpress",
                "Developed many Wordpress themes and plugins",
                "Created numerous HTML layouts from PSD templates",
                "One of the WordPress themes created by me used to actively sold on Envato Marketplaces",
              ]}
            />
          </Section>

          <Skills title="Skills" data={hardSkills} />

          <Skills title="Familiar with" data={hardSkills} />

          <Skills title="Soft Skills" data={softSkills} />

          <Section title="Recent Projects">
            <Job
              title="Inditex - Billing Conditions Platform"
              location="Spain"
              period="10/2024 – 02/2025"
              description={"The app is used to manage billing conditions for different purchase centers, stores, and countries. It allows users to create, update, and delete different price rules, as well as generate reports and manage user roles."}
              achievements={[
                "Redesigned the app from a legacy web app to a modern UI using the latest Amiga framework components",
                "Within the team designed application as a pricing management for users handling rates between different purchase centers and stores",
                "Developed the complete UI and Data Grid that includes large scale tables with the advanced filtering logic.",
                "Supported a Microfrontend Architecture that included 3 separate applications (Billing Conditions, Reports, and User Management).",
              ]}
              technologies={[
                "React",
                "React-Context API",
                "TypeScript",
                "Vite",
                "Amiga Framework",
                "HTML/CSS/Sass",
                "Service Workers",
                "Scrum",
                "Github",
              ]}
            />

            <Job
              title="Inditex - Customs Clearance Platform"
              location="Spain"
              period="01/2024 – 10/2024"
              description={"Platform designed for automation customs documentation. The system enhances logistics operations by optimizing data management and improving user experience for forwarders and customs brokers."}
              achievements={[
                <span>Improved an error handling of the UI by using a Typescript which reduced the number of errors by 50%</span>,
                <span>Designed interfaces for customs clearance documentation, adhering to international trade regulations (EU, APAC)</span>,
                <span>Implemented UI for a Logistics Management System (LMS) that integrates with customs brokers and forwarders</span>,
                <span>Created dynamic table components enabling efficient handling, smooth navigation and manipulation of large datasets.</span>,
                <span>Within the FE team increased a UI test coverage up to 80% by using Vitest and React Testing Library</span>,
              ]}
              technologies={[
                "React",
                "React Hooks",
                "React-Context API",
                "TypeScript",
                "i18next",
                "Vite",
                "Vitest",
                "Amiga Framework",
                "Microfrontends",
                "CSS/Sass",
              ]}
            />
            <Job
              title="Inditex - Logistics Platform"
              location="Spain"
              period="10/2021 – 12/2023"
              description={"Logistic Platform, online map. Logistic routes and trucks showed on the map with transport location platforms, departure and arrival centers. The app is used by internal company employees to manage logistics operations, including route planning, shipment tracking, and delivery scheduling."}
              achievements={[
                "Took a key part on the implementation of the user interface for a logistics application used by 1,000+ users, enabling real-time tracking of delivery routes, shipment statuses, and customs documentation.",
                "Partnered with other teams (BE) to deliver a seamless full-stack solution, ensuring alignment with business goals and technical constraints.",
                "Integrated dynamic maps and real-time data visualization tools to display delivery routes and shipment analytics",
                "The app has increased the efficiency of the logistics process by +300% and reduced the number of errors in the delivery process.",
              ]}
              technologies={[
                "React",
                "Google Maps API",
                "TypeScript",
                "Redux",
                "Webpack",
                "Amiga Framework",
                "Css/Sass",
                "E2E Cypress",
                "Lighthouse DevTools",
              ]}
            />
            <Job
              title="McKinsey - Lifecycle Pricing"
              location="Poland"
              period="03/2021 – 10/2021"
              achievements={[
                "Developed a web app for collecting and analyzing seasonal sales data, optimizing promotions, and forecasting revenue.",
                "Decreased by 60% of re-renders of the main content area by implementing a memoization using React.memo and lazy loading.",
                "Engineered a scalable and efficient filtering system for the sidebar panel, leveraging advanced state management patterns and performance optimization techniques.",
              ]}
              description={"The application which aims to collect the data about all sales in season, making promotions and sale coupons. It filters data by wide range of parameters and forecast possible revenue for future seasons."}
              technologies={[
                "React",
                "Redux",
                "Redux Saga",
                "REST APIs",
                "AG-Grid (multifunctional table)",
                "Formik",
                "Styled Components",
                "TypeScript",
                "Scrum",
                "Node.js",
                "D3.js",
                "Lighthouse DevTools",
              ]}
            />
            <Job
              title="Deltatre - DAZN"
              location="Germany, Czech Republic"
              period="05/2020 – 03/2021"
              achievements={[
                "Designed a Sports TV streaming dashboard for app.",
                "Increased by 20% the First-byte load times by suggesting an updates for the CDN configuration.",
                "Worked on improving the global app state management and creating UI layout.",
                "Implemented an interface customization feature, allowing users to personalize their dashboard and content based on their preferences.",
                ]}
              description={"Worked on creation of a dashboard for app which is used by sports fans to stream live sports events."}
              technologies={[
                "React",
                "React hooks",
                "Redux",
                "TypeScript",
                "REST APIs",
                "CSS Modules",
                "Scrum",
                "Webpack",
                "Jest",
                "React Testing Library",
                "Lighthouse DevTools",
                "Android TV",
              ]}
            />

            {/*<div className="print--margin-bottom"/>*/}

            <Job
              title="Brussels Airport Loyalty"
              location="Belgium"
              period="10/2019 – 04/2020"
              description={"The Brussels Airport reward (loyalty) program for airport clients. The application was designed so that when a customer registers with their phone number and arrives at the airport, their geolocation is detected. This triggers the delivery of various bonuses directly to their phone—such as Fast Pass access, duty-free discounts, and more."}
              achievements={[
                "Developed complex voucher system which customers now can use to get discounts in the Brussels Airport shops.",
                "Actively participated in the planning and design of the app, including Planning Weeks with Product Owners from Brussels",
                "Contributing to the creation of user stories and wireframes.",
                "Reduced latency up to 60% between the server and client by implementing a long polling technique for app notifications process.",
                "Worked on re-design of the app state management and UI layout.",
              ]}
              technologies={[
                "React",
                "Scrum",
                "Redux",
                "Redux Saga",
                "CSS Modules",
                "Webpack",
                "GitBud",
                "Jest",
                "React Testing Library",
              ]}
            />
            <Job
              title="Danfoss Co - Cooling UI"
              location="Denmark"
              period="09/2018 – 10/2019"
              achievements={[
                "Key role in the design and development of the app that aims to control hardware equipment for stores and shops",
                "Implemented a dynamic dashboard with real-time data visualization, enabling users to monitor and adjust cooling systems based on temperature and energy consumption metrics.",
                "Developed smart system UI components with full control features for use in the dashboard and the app. It's been used lately by other engineering departments of Danfoss Co.",,
                "Had a business trip to Denmark to collaborate directly with the client-side team."
              ]}
              description={"The app that aims to control hardware equipment for stores and shops. Users can control, toggle on/off, and view real-time data for all in-store equipment and hardware, such as refrigerators, lighting, air conditioning, and more."}
              technologies={[
                "React",
                "Redux",
                "Redux thunk",
                "Styled Components",
                "D3.js",
                "Webpack",
                "Jest",
                "React Testing Library",
              ]}
            />
          </Section>

          <Section title="Certificates">
            <ul>
              {certificates.map((certificate, index) => (
                  <li key={index}>{certificate}</li>
                ))
              }
            </ul>
          </Section>

          <Section title="Mentorship">
            <TitledList
              title="Capgemini - Frontend Interviews"
              location="Lviv, Ukraine"
              period="2022 – Present"
            >
              <span><strong>Evaluated 30+</strong> candidates for Frontend Developer roles from AE to Senior levels</span>
              <span>Collaborated with hiring managers and HR to align technical expectations with business needs and project requirements.</span>
              <span>Helped build a strong frontend team, contributing to the selection of high-quality candidates who successfully integrated into development teams.</span>
            </TitledList>
            <TitledList
              title="Epam front-end course - JS Lab"
              location="Lviv, Ukraine"
              period="2019 – 2020"
            >
              <span><strong>Trained 150+</strong> students over 2 years, covering JavaScript, React, and modern frontend development practices.</span>
              <span>Mentored students individually, helping them overcome technical challenges and improve their problem-solving skills.</span>
              <span>Conducted technical assessments and code reviews.</span>
            </TitledList>
            <TitledList
              title="Light IT Academy - Front-end LAB"
              location="Zaporizhzhia, Ukraine"
              period="2017 – 2018"
            >
              <span>Designed course content based on student feedback, keeping it aligned with the latest JavaScript trends and industry demands.</span>
              <span><strong>Trained 20+</strong> students, covering JavaScript, React, and modern frontend development practices.</span>
              <span>Conducted technical assessments and code reviews.</span>
            </TitledList>
          </Section>

          <Section title="Education">
            <TitledList
              title="Interregional Academy of Personnel Management"
              location="Kyiv, Ukraine"
              period="2009 – 2014"
            >
              <h5>Specialist of Banking, Economist. Bank manager</h5>
            </TitledList>
          </Section>

          <Section title="Conferences & Courses">
            <TitledList
              title="SDLC. Not By SCRUM Alone"
              location="On-line conference"
              period="04/2020"
            >
              <p>Highlighted pros and cons of diﬀerent ways of delivering projects</p>
            </TitledList>
            <TitledList
              title="Business English, Short Course"
              location="Oﬀ-line course within EPAM"
              period="02/2019 – 08/2019"
            >
              <p>As a result, I increased my speaking and writing level to B2 (Intermediate)</p>
            </TitledList>
            <TitledList
              title="Friday JS"
              location="Oﬀ-line meetups, Zaporizhzhia, Ukraine"
              period="02/2018 – 08/2018"
            >
              <p>Series of Friday meetings in JS community of front-end developers in Zaporizhzhia</p>
            </TitledList>
            <TitledList
              title="Kharkiv CSS"
              location="Oﬀ-line conference, Kharkiv, Ukraine"
              period="04/2017"
            >
              <p>Big annual front-end meetup. There were highlighted new CSS4 features, JS animations and others.</p>
            </TitledList>
          </Section>

          <Section title="Langauges">
            <h4>Ukrainian - native</h4>
            <h4>English - B2 (upper-intermediate)</h4>
          </Section>
        </div>

        <footer className="footer">
          <p>Created by Ihor Anosov</p>
        </footer>
      </div>
      <button
        type="button"
        className="print-button btn btn-secondary"
        onClick={() => handlePrint()}
      >
        Print to PDF
      </button>
    </div>
  );
};

export default App;
