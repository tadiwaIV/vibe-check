import React, { useState } from "react";
import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from "react-router-dom";
import {Container, Nav, Row, Form, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

const [isOpen, setOpen] = useState(false);

  return (

    <div className="footer heading" >
      <Container className="" fluid>
        <Row className="content">
          <Col sm={3} md={4} xl={3} className="details">
            <h3  className="title"><span><FontAwesomeIcon className="icon" icon= {faCalendarCheck} size="lg" /> Vibe Check</span></h3>
            <ul >
              <li>29 Windermere Rd, Humewood </li>
              <li>Gqeberha, 6013</li>
              <li>+10 101 010 1010</li>
              <li>contact@email.com</li>
              <li>
                <div className="footer-social">
                <a href="#" className="twitter"><FontAwesomeIcon className="icon" icon= {faTwitter} size="md" /></a>
                <a href="#" className="facebook"><FontAwesomeIcon className="icon" icon= {faFacebookF} size="md" /></a>
                <a href="#" className="instagram"><FontAwesomeIcon className="icon" icon= {faInstagram} size="md" /></a>
                <a href="#" className="linkedIn"><FontAwesomeIcon className="icon" icon= {faLinkedinIn} size="md" /></a>
                <a href="#" className="github"><FontAwesomeIcon className="icon" icon= {faGithub} size="md" /></a>
                </div>
              </li>
            </ul>
          </Col>
          <Col sm={2} md={4} xl={3} className="company">
            <h5 className="title"> Company</h5>
            <ul>
              <li>Pricing</li>
              <li>Gallery</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col sm={3} md={4} xl={3} className="popular-destinations">
            <h5 className="title"> Popular destinations</h5>
            <Row>
              <Col sm>
                <ul>
                  <li>Indonesia</li>
                  <li>Australia</li>
                  <li>France</li>
                  <li>Brazil</li>
                </ul>
              </Col>
              <Col sm>
                <ul>
                  <li>Bali</li>
                  <li>Argentina</li>
                  <li>Switzerland</li>
                  <li>Hawaii</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xl={3} className="newsletter">
            <h5 className="title"> Newsletter</h5>
            <ul>
              <li className="description">Sign up by adding your e-mail and keep up-to-date and receive the latest news and specials from <span>Vibe Check </span>
                in our monthly newsletter</li>
              <li>
                <Form.Group controlId="formNewsletter" className="formNewsletter">
                  <Form.Control className="input" type="email" placeholder="Email" />
                  <Button className="send">Send</Button>
                </Form.Group>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

    </div>


  );
 };

 export default Footer;
