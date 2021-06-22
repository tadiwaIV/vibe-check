import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMapPin, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import heroImage from './hero-image.jpg'
import Form from 'react-bootstrap/Form'

const LandingPage = () => (
  <div>
    <Container className="landing-page" fluid>
      <Row>
        <div className="text-box">
          <h1> Find Your Tranquility</h1>
          <h4> Book a trip with Vibe Check today</h4>
          <a href="/home"> Start a Vibe</a>
        </div>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <div className="calculate">
          <h4> Where do you want to go?</h4>
          <Form.Group controlId="formCalculate">
            <Form.Control className="input" type="text" placeholder="Where to?" />
          </Form.Group>
          <Form.Group controlId="formCalculate">
            <Form.Control className="input" type="date" placeholder="Date" />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control className="input" as="select" placeholder="Travel type" custom>
              <option value="" selected disabled hidden>Travel Type</option>
              <option>Airline</option>
              <option>Train</option>
              <option>Bus</option>
              <option>Car Hire</option>
            </Form.Control>
          </Form.Group>
          <div className="calculate-btn">
            <a href="#">Search</a>
          </div>
        </div>
      </Row>
    </Container>
  </div>
);

export default LandingPage;
