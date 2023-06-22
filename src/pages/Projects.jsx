import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import EshopRouter from "../assets/projects/EshopRouter.PNG";
import Capp from "../assets/projects/Capp.PNG";
import EcomMern from "../assets/projects/EcomMern.PNG";
import reduxp from "../assets/projects/reduxp.PNG";
import Mapi from "../assets/projects/Mapi.PNG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcomMern}
              isBlog={false}
              title="Ecommerce Store-MERN"
              description="The E-Commerce Store project is a college major project where I led the frontend development, creating a fully responsive e-commerce platform. I utilized React-Redux, Router, Axios, Node, Express, Cores, JWT Tokens, and MongoDB. Key features include user authentication, URL navigation, cart functionality, and seamless data management."
              ghLink="https://github.com/LOVKUSH9888/MERN-Ecommerce-CollegeMajor"
              demoLink="https://drive.google.com/file/d/1E6VYbkukfMloy--QwB369td-s8CFl1IT/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capp}
              isBlog={false}
              title="Social Media"
              description="The Chat-Web App project, built with React.js, Axios, and React-Chat-Engine, is a responsive messaging application. It includes features like user authentication, message tracking, group conversations, and support for sending text and image attachments, providing a seamless and interactive communication experience."
              ghLink="https://github.com/LOVKUSH9888/Chat-App-Using-React-Js"
              demoLink="https://drive.google.com/file/d/1vcuiquqVceMe0-H9S3oayDwvEzL8FqwD/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mapi}
              isBlog={false}
              title="Movie-API Web-App"
              description="The Movie-API Web-App project, developed with React.js and utilizing the OMDb API, is a responsive web application. Key features include a fully responsive design, movie search functionality, and engaging hovering effects, providing users with an intuitive and visually appealing experience when searching for movies."
              ghLink="https://github.com/LOVKUSH9888/React_Project_1-Movie-app"
              demoLink="https://drive.google.com/file/d/1G8My9n2fwpqFFZnGuVY9zRB6Woaq0T0t/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EshopRouter}
              isBlog={false}
              title="E-Shop Router"
              description="ESHOP is a React project that showcases my skills in HTML, CSS, Bootstrap, JavaScript, and Vite-React-Router. It features a fully responsive design achieved through the use of media queries and Bootstrap classes. The application fetches data from the JSON-Placeholder API and includes components such as Header, Footer, and pages like Home, About, SingleProducts, Products, and Error. Check out the Netlify deployed link and GitHub repository for more details."
              ghLink="https://github.com/LOVKUSH9888/router-app"
              demoLink="https://storied-basbousa-2f7c27.netlify.app/"
            />
          </Col>

<Col          Col md={4} className="project-card">
            <ProjectCard
              imgPath={reduxp}
              isBlog={false}
              title="React-Redux Mini Cart"
              description="This mini ECART project was created to learn React-Redux. It features functionalities like API fetching using useEffect and useState hooks, Redux basics including slice and store creation, and implementing features such as add to cart and remove. The project also explores the use of new hooks like useSelector for state management. Check out the live link and repository for more details."
              ghLink="https://github.com/LOVKUSH9888/ECART-React-Redux"
              demoLink="https://animated-caramel-7cd808.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reduxp}
              isBlog={false}
              title="React-Redux Mini Cart"
              description="This mini ECART project was created to learn React-Redux. It features functionalities like API fetching using useEffect and useState hooks, Redux basics including slice and store creation, and implementing features such as add to cart and remove. The project also explores the use of new hooks like useSelector for state management. Check out the live link and repository for more details."
              ghLink="https://github.com/LOVKUSH9888/ECART-React-Redux"
              demoLink="https://animated-caramel-7cd808.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
