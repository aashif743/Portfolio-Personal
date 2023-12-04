import { Container, Row, Col, Tab, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Website",
      description: "Designed and developed a Landing website for a Business. ",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio",
      description: "Designed and developed a responsive portfolio website showcasing skills, projects, and achievements.",
      imgUrl: projImg2,
    },
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform, including user authentication and product management.",
      imgUrl: projImg3,
    },
    {
      title: "Tech Blogging Platform",
      description: "Created a tech blog platform with features for user registration, article creation, and commenting.",
      imgUrl: projImg4,
    },
    {
      title: "Restaurant Landing Page",
      description: "Design a static landing page for a restaurant. Include sections for the menu, contact information, and a gallery showcasing the restaurant's ambiance and dishes.",
      imgUrl: projImg5,
    },
    {
      title: "Product Showcase",
      description: "Build a website to showcase a specific product or product line. Include high-quality images, features, and a contact form for inquiries.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/*
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> 
                  */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/*
                    <Tab.Pane eventKey="second">

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
