import {React, ImageBackground, View, Text} from 'react';
import {Container, Card, Form, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMapPin, faHeadphonesAlt, faPlaneDeparture, faHotel, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

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
              src="/img/our-story.jpg"
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
              src="/img/new-zealand.jpg" alt="New Zealand"
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Barcelona</h4>
            <img
              src="/img/barcelona.jpg" alt="Barcelona"
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Maui</h4>
            <img
              src="/img/maui.jpg" alt="Maui"
            />
          </div>
        </Col>
      </Row>
      <Row className='popular-grid no-gutters'>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Bora Bora</h4>
            <img
              src="/img/bora-bora.jpg" alt="Bora Bora"
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Paris</h4>
            <img
              src="/img/paris.jpg" alt="Paris"
            />
          </div>
        </Col>
        <Col lg={3} className='destination '>
          <div className="img">
            <h4>Rome</h4>
            <img
              src="/img/rome.jpg" alt="Rome"
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
            <Card.Img variant="top" src="/img/ibiza.jpg" alt="Ibiza" />
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
            <Card.Img variant="top" src="/img/maldives.jpg" alt="Maldives" />
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
            <Card.Img variant="top" src="/img/phuket.jpg" alt="Phuket" />
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
                  src="/img/bali.jpg" alt="Bali"
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
                src="/img/sydney.jpg" alt="Sydney"
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
                src="/img/st-lucia.jpg" alt="St Lucia"
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
