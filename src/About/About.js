import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import CountUp from 'react-countup';
import background from "./background.jpg";
import sunset from "./sunset.jpg";
import cityBoat from "./city-boat.jpg";
import friends from "./friends.jpg";
import john from "./john.jpg";
import jane from "./jane.jpg";
import hayleigh from "./hayleigh.jpg";

const About = () => (
  <div>
    <Container className="about-bg" fluid>
      <Row>
          <div className="text-box">
            <h2>About Us</h2>
            <p> We're a vibe and we're here to help you find your own </p>
          </div>
      </Row>
    </Container>
    <Container className="about-our-story" fluid>
      <Row>
        <div className='headline heading'>
          <div class="background-text">
            <h2>Story</h2>
          </div>
          <h6> Discover Story</h6>
          <h4> Our Story</h4>
        </div>
      </Row>
      <Row className='story'>
        <Col>
          <div className='text-box'>
            <p>Consulting represents success at realizing the company is going in the wrong direction.
              The only time the company fails is when it is not possible to do a turnaround anymore. We
              help companies pivot into more profitable directions where they can expand and grow. It
              is inevitable that companies will end up making a few mistakes; we help them correct these
              mistakes.</p>

            <p>Consulting represents success at realizing the company is going in the wrong direction.
              The only time the company fails is when it is not possible to do a turnaround anymore. We
              help companies pivot into more profitable directions where they can expand and grow. It
              is inevitable that companies will end up making a few mistakes; we help them correct these
              mistakes.</p>
          </div>
        </Col>
      </Row>
      <Row className="about-our-story-grid">
        <Col md={4}>
          <div className="img">
            <img
              src={sunset}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="img">
            <img
              src={cityBoat}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="counter">
          <div className='text-box'>
            <CountUp end={345} duration={10} />
            <p>Tour has done successfully</p>
          </div>
        </Col>
        <Col sm={4} className="counter">
          <div className='text-box'>
            <CountUp end={78} duration={10} />
            <p>Yearly tour arrange</p>
          </div>
        </Col>
        <Col sm={4} className="counter">
          <div className='text-box'>
            <CountUp end={3958} duration={10} />
            <p>Happy Clients</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="our-mission heading" fluid>
      <Row>
        <Col sm={6}>
          <div className="img">
            <img
              src={friends}
            />
          </div>
        </Col>
        <Col sm={6}>
          <div className='text-box'>
            <div className='headline'>
              <div class="background-text">
                <h2>Mission</h2>
              </div>
              <h6> Our Mission</h6>
              <h4> Our Mission</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt,
              possimus temporibus aperiam eum, quaerat sapiente.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur
              molestiae.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="join-us-bg heading" fluid>
      <Row>
          <div className="text-box">
            <h2>Join and Trip With Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ut, doloremque quo
              molestiae nesciunt officiis veniam, beatae dignissimos! </p>
            <a href='#'> Get In Touch</a>
          </div>
      </Row>
    </Container>
    <Container className="our-team" fluid>
      <Row>
        <div className='headline heading'>
          <div class="background-text">
            <h2>Our Team</h2>
          </div>
          <h6> Amazing Staff</h6>
          <h4> Meet Our Team</h4>
        </div>
      </Row>
      <Row>
        <Container>
          <Row className="our-team-grid">
            <Col lg={4}>
              <Card >
                <Card.Img variant="top" src={john} />
                <Card.Body>
                  <Card.Title>
                    <h5>John Doe</h5>
                    <h6>Staff</h6>
                  </Card.Title>
                  <Card.Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores?
                      Eos alias fugit eius, repudiandae molestias error</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card >
                <Card.Img variant="top" src={jane} />
                <Card.Body>
                  <Card.Title>
                    <h5>Jane Doe</h5>
                    <h6>Staff</h6>
                  </Card.Title>
                  <Card.Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores?
                      Eos alias fugit eius, repudiandae molestias error</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card >
                <Card.Img variant="top" src={hayleigh} />
                <Card.Body>
                  <Card.Title>
                    <h5>Hayleigh Smith</h5>
                    <h6>Staff</h6>
                  </Card.Title>
                  <Card.Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, maiores?
                      Eos alias fugit eius, repudiandae molestias error</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  </div>
);

export default About;
