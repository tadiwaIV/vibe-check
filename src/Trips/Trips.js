import './Trips.css';
import {React ,useState, onValueChange} from "react";
import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import MultiRangeSlider from ".././Components/MultiRangeSlider.js";
import maldives from "./maldives.jpg";
import newOrleans from "./new-orleans.jpg";
import marrakesh from "./marrakesh.jpg";
import capeTown from "./cape-town.jpg";
import dubai from "./dubai.jpg";
import dubrovnik from "./dubrovnik.jpg";

function Trips() {
  return (
  <div>
    <Container className="trips-bg" fluid>
      <Row>
          <div className="text-box">
            <h2>Trips</h2>
            <p> Get on the move and have the vacation of a lifetime </p>
          </div>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <div className="calculate">
          <h4> Where do you want to go?</h4>
          <Form.Group controlId="formCalculate">
            <Form.Control className="input input-text" type="text" placeholder="Where to?" />
          </Form.Group>
          <Form.Group controlId="formCalculate">
            <Form.Control className="input input-date" type="date" placeholder="Date" />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control className="input input-select" as="select" placeholder="Travel type" custom>
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
    <Container className="book-now heading">
      <Row>
        <Col lg={4}>
          <Row>
            <div className='headline'>
              <h5> Filter Result</h5>
            </div>
          </Row>
          <Row>
            <div className='text-box'>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control className="input" as="select" placeholder="Travel type" custom>
                    <option value="" selected disabled hidden>Country</option>
                    <option>Airline</option>
                    <option>Train</option>
                    <option>Bus</option>
                    <option>Car Hire</option>
                  </Form.Control>
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
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Price Range</Form.Label>
                  <MultiRangeSlider min={0} max={5000} />
                </Form.Group>
                <Form.Group>
                  <a href="#" className="formButton"> Reset</a>
                </Form.Group>
            </div>
          </Row>
        </Col>
        <Col lg={8}>
          <Row>
            <Col md={6}>
              <Card className='book-now-card'>
                <Card.Img variant="top" src={maldives} />
                <Card.Body>
                  <Card.Title>
                    <h5>South Male Atoll </h5>
                    <h6>Maldives</h6>
                  </Card.Title>
                  <Card.Text>
                    <div className='rating'>
                      <Rating
                        value='5'
                        weight="14"
                        readonly
                      />
                    </div>
                    <div className='review'>(20 Reviews)</div>
                    <div className="clock"><FontAwesomeIcon className="icon" icon= {faClock} size="sm" /></div>
                    <div className='days'>5 days</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='book-now-card'>
                <Card.Img variant="top" src={marrakesh} />
                <Card.Body>
                  <Card.Title>
                    <h5>Marrakesh </h5>
                    <h6>Morroco</h6>
                  </Card.Title>
                  <Card.Text>
                    <div className='rating'>
                      <Rating
                        value='5'
                        weight="14"
                        readonly
                      />
                    </div>
                    <div className='review'>(20 Reviews)</div>
                    <div className="clock"><FontAwesomeIcon className="icon" icon= {faClock} size="sm" /></div>
                    <div className='days'>5 days</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='book-now-card'>
                <Card.Img variant="top" src={newOrleans} />
                <Card.Body>
                  <Card.Title>
                    <h5>New Orleans </h5>
                    <h6>United States of America</h6>
                  </Card.Title>
                  <Card.Text>
                    <div className='rating'>
                      <Rating
                        value='5'
                        weight="14"
                        readonly
                      />
                    </div>
                    <div className='review'>(20 Reviews)</div>
                    <div className="clock"><FontAwesomeIcon className="icon" icon= {faClock} size="sm" /></div>
                    <div className='days'>5 days</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='book-now-card'>
                <Card.Img variant="top" src={dubai} />
                <Card.Body>
                  <Card.Title>
                    <h5>Dubai </h5>
                    <h6>UAE</h6>
                  </Card.Title>
                  <Card.Text>
                    <div className='rating'>
                      <Rating
                        value='5'
                        weight="14"
                        readonly
                      />
                    </div>
                    <div className='review'>(20 Reviews)</div>
                    <div className="clock"><FontAwesomeIcon className="icon" icon= {faClock} size="sm" /></div>
                    <div className='days'>5 days</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='book-now-card'>
                <Card.Img variant="top" src={capeTown} />
                <Card.Body>
                  <Card.Title>
                    <h5>Cape Town </h5>
                    <h6>South Africa</h6>
                  </Card.Title>
                  <Card.Text>
                    <div className='rating'>
                      <Rating
                        value='5'
                        weight="14"
                        readonly
                      />
                    </div>
                    <div className='review'>(20 Reviews)</div>
                    <div className="clock"><FontAwesomeIcon className="icon" icon= {faClock} size="sm" /></div>
                    <div className='days'>5 days</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='book-now-card'>
                <Card.Img variant="top" src={dubrovnik} />
                <Card.Body>
                  <Card.Title>
                    <h5>Dubrovnik </h5>
                    <h6>Croatia</h6>
                  </Card.Title>
                  <Card.Text>
                    <div className='rating'>
                      <Rating
                        value='5'
                        weight="14"
                        readonly
                      />
                    </div>
                    <div className='review'>(20 Reviews)</div>
                    <div className="clock"><FontAwesomeIcon className="icon" icon= {faClock} size="sm" /></div>
                    <div className='days'>5 days</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <div className='more-places'>
              <a href='#'> More Places</a>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Trips;
