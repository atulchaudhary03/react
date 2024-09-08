import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/meeeew.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Atul Chaudhary</strong>
              </h1>

              <p className="heading-description blockquote"> 
              I am a software engineering student at Graphic Era Hill University in Dehradun, India. 
              Set to graduate in 2025, I have already established myself as a promising full-stack developer with a strong foundation in both front-end and back-end technologies.
              Currently maintaining an impressive CGPA of 7.7, my academic excellence is matched by my practical skills and project experience. 
              My technical repertoire includes proficiency in languages such as C/C++, JavaScript, TypeScript, and Python, as well as expertise in popular frameworks like React and Node.js.
              My passion for web development extends beyond just coding. 
              I have a keen eye for user experience and responsive design, implementing these principles using modern CSS frameworks like Tailwind CSS. 
              On the back-end, i've worked in SQL and PostgreSQL databases.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar"
              style={{ 
             width: "100%", 
             borderRadius: "60%", 
             objectFit: "cover", 
             maxHeight: "760px" 
            }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
