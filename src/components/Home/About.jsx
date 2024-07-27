import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/code-typing.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>

              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="boldColor"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <b className="boldColor">Deepak Kumar Raj </b>
                 and I'm from <b className="boldColor"> Aurangabad, Bihar, India.</b>
                <br />
                <br />
                Currently I'm in final year of Bachelor of Engineering in Computer Science and Engineering from <b className="boldColor"> University Institute of Engineering and Technology, Panjab University, Chandigarh </b>
                <br />
                <br />
                  As a
                  <b className="boldColor"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="boldColor"> C, C++, Javascript, Python </b>
                    as well as have knowledge in programming languages such as 
                  <b className="boldColor"> TypeScript</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="boldColor">Node.js, Express.js, MongoDB,</b> and
                  <b className="boldColor">
                      {" "}
                      modern Javascript libraries and frameworks
                  </b>
                  &nbsp; like
                  <b className="boldColor"> React.js</b>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="boldColor"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="boldColor"> Artificial Intelligence and Machine learning.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1> 
                <p>
                Please don't hesitate to reach out to me and <span className="boldColor">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/ideepak9898"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/ideepak9898"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/ideepak9898/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/u/ideepak9898/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About