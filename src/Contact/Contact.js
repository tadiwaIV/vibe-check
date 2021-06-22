import React from "react";
import {Container, Row, Col, Button, Card, Form} from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import SimpleMap from ".././Components/Map.js";

const Contact = () => (
  <div>
    <Container className="contact-bg" fluid>
      <Row>
          <div className="text-box">
            <h2>Get In Touch</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur
              doloremque, maiores doloribus officia iste. Dolores. </p>
          </div>
      </Row>
    </Container>
    <Container className="map heading" fluid>
      <Row>
        <SimpleMap />
      </Row>
    </Container>
    <Container className="get-in-touch heading" fluid>
      <Row>
        <div className="headline">
          <h4> Get In Touch</h4>
        </div>
      </Row>
      <Row>
        <Col md={8}>
          <Form className="form">
            <Form.Row>
              <Col>
                <Form.Control as="textarea" rows={8} />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Enter your name" />
              </Col>
              <Col>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Enter Subject" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <a href="#"> Send</a>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col md={4} className="info">
          <Row className="no-gutters">
            <Col md={4} className="icon-container">
              <FontAwesomeIcon className="icon" icon= {faHome} size="lg" />
            </Col>
            <Col md={8}>
              <ul>
                <li>Hume, Port Elizabeth </li>
                <li><p>Gqeberha, 6013</p></li>
              </ul>
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col md={4} className="icon-container">
              <FontAwesomeIcon className="icon" icon= {faMobileAlt} size="lg" />
            </Col>
            <Col md={8}>
              <ul>
                <li>+27 101 010 1010 </li>
                <li><p>Mon to Fri 9am to 6pm</p></li>
              </ul>
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col md={4} className="icon-container">
              <FontAwesomeIcon className="icon" icon= {faEnvelope} size="lg" />
            </Col>
            <Col md={8}>
              <ul>
                <li>email@email.com </li>
                <li><p>Send us your query anytime!</p></li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
