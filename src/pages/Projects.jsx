import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.jpeg";
import kickstart from "../assets/projects/todo-app.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="boldColor">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="House Price Prediction"
              description="This project aims to develop a robust and accurate machine learning model that predicts house prices based on various features and historical data. This project utilises advanced data analysis and machine learning techniques to provide insights and forecasts for the real estate market. Tech stack : Python, NumPy, Pandas, Seaborn, Scikit-Learn, Regression  "
              ghLink="https://github.com/ideepak9898/House_Price_Prediction_System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="ToDo-App"
              description="The ToDo-app is a modern task management application designed to streamline our daily workflow. Built with a robust tech stack, the app utilises the latest web development technologies to deliver a fast, responsive, and user-friendly experience. Tech Stack : ReactJS, TypeScript, Vite, Emotion, MUI"
              ghLink="https://github.com/ideepak9898/ToDo-List"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="e‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/ideepak9898/eCommerce-web"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects