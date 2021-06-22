import React from "react";
import {ImageBackground, View, Text} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMapPin, faHeadphonesAlt, faPlaneDeparture, faHotel, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form'
import ourStory from './our-story.jpg';
import newZealand from './new-zealand.jpg';
import barcelona from './barcelona.jpg';
import maui from './maui.jpg';
import boraBora from './bora-bora.jpg';
import paris from './paris.jpg';
import rome from './rome.jpg';
import ibiza from './ibiza.jpg';
import maldives from './maldives.jpg';
import phuket from './phuket.jpg';
import bali from './bali.jpg';
import sydney from './sydney.jpg';
import stLucia from './st-lucia.jpg';

const Home = () => (
  <div >
    <Container className="home-bg" fluid>
      <Row>
        <div className="text-box">
          <h1>Let's Enjoy  The <br/> Wonders of Nature</h1>
          <p> Book a trip today and explore all corners of the world. Embark on your dream trip and make memories
            that will last a lifetime. Vibe Check is your partner in living your best life</p>
          <a href="#"> Book a trip </a>
        </div>
      </Row>
    </Container>
    <Container className='our-story heading' fluid>
      <Row>
        <Col sm={6}>
          <div className="text-box">
            <div className='headline'>
              <div class="background-text">
                <h2>Story</h2>
              </div>
              <h6> Discover Story</h6>
              <h4> Our Story</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt,
              possimus temporibus aperiam eum, quaerat sapiente.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur molestiae.</p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="img">
            <img
              src={ourStory}
            />
          </div>
        </Col>
      </Row>
    </Container>
    <Container className='popular heading' fluid>
      <Row>
        <div className='text-box'>
          <div className='headline'>
            <h2> Popular Destination</h2>
            <p> Suffered alteration in some form, by injected humour or good day <br/> randomised booth anim 8-bit
              hella wolf moon beard words.</p>
          </div>
        </div>
      </Row>
      <Row className='popular-grid no-gutters'>
        <Col lg={3} className='destination ' >
          <div className="img">
            <h4>New Zealand</h4>
            <img
              src={newZealand}
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Barcelona</h4>
            <img
              src={barcelona}
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Maui</h4>
            <img
              src={maui}
            />
          </div>
        </Col>
      </Row>
      <Row className='popular-grid no-gutters'>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Bora Bora</h4>
            <img
              src={boraBora}
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Paris</h4>
            <img
              src={paris}
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Rome</h4>
            <img
              src={rome}
            />
          </div>
        </Col>
      </Row>
    </Container>
    <Container className='services heading'>
      <Row>
        <Col sm={4}>
          <div className='text-box'>
            <span><FontAwesomeIcon className="icon" icon= {faPlaneDeparture} size="lg" /></span>
            <h4>Comfortable Journey</h4>
            <p>Get too and from your destination with maximum ease.</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className='text-box'>
            <span><FontAwesomeIcon className="icon" icon= {faHotel} size="lg" /></span>
            <h4>Luxurious Hotels</h4>
            <p>Eat, rest, sleep and recoperate in the best hotels in the world .</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className='text-box'>
            <span><FontAwesomeIcon className="icon" icon= {faGlobeAfrica} size="lg" /></span>
            <h4>Travel Guide</h4>
            <p>Never get lost with our higly professional and friendly travel guides.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className='recent-trips heading' fluid>
      <Row>
        <div className='headline'>
          <h2>Recent Trips</h2>
        </div>
      </Row>
      <Row className='recent-trips-grid  no-gutters'>
        <Col lg={4} className='trip'>
          <Card >
            <Card.Img variant="top" src={ibiza} />
            <Card.Body>
              <Card.Text>
                <p>25 May,2021</p>
              </Card.Text>
              <Card.Title><h4>Find yourself</h4></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className='trip'>
          <Card >
            <Card.Img variant="top" src={maldives} />
            <Card.Body>
              <Card.Text>
                <p>25 May,2021</p>
              </Card.Text>
              <Card.Title><h4>Take a Baecation</h4></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className='trip'>
          <Card >
            <Card.Img variant="top" src={phuket} />
            <Card.Body>
              <Card.Text>
                <p>25 May,2021</p>
              </Card.Text>
              <Card.Title><h4>Get lost in the fun</h4></Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container className='journey heading' fluid>
      <Row>
        <div className='headline'>
          <div class="background-text">
            <h2>Journey</h2>
          </div>
          <h6> Journey</h6>
          <h4> Your Journey Starts Here</h4>
        </div>
      </Row>
      <Row className='journey-grid'>
        <Container>
          <Row>
            <Col lg={4} className='journey-price-bg' >
              <div className="img">
                <img
                  src={bali}
                />
                <div class="price">
                  <a href='#' > R 999,99</a>
                  <h3>Bali</h3>
                </div>
              </div>
            </Col>
            <Col lg={4} className='journey-price-bg' >
            <div className="img">
              <img
                src={sydney}
              />
              <div class="price">
                <a href='#' > R 999,99</a>
                <h3>Sydney</h3>
              </div>
            </div>
            </Col>
            <Col lg={4} className='journey-price-bg' >
            <div className="img">
              <img
                src={stLucia}
              />
              <div class="price">
                <a href='#' > R 999,99</a>
                <h3>St. Lucia</h3>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  </div>
);

export default Home;
