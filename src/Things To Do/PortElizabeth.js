import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dolphin from "./dolphin.jpg";
import activity from "./activity.jpg";
import outdoor from "./outdoor.jpg";
import culture from "./culture.jpg";
import wellness from "./wellness.jpg";
import nature from "./nature.jpg";
import wildlife from "./wildlife.jpg";
import museums from "./museums.jpg";
import landmark from "./landmark.jpg";
import shopping from "./shopping.jpg";
import kragga from "./kragga.jpg";
import kamma from "./kamma.jpg";
import karoo from "./karoo.jpg";
import addo from "./addo.jpg";
import elephant from "./elephant.jpg";
import whale from "./whale.jpg";
import donkin from "./donkin.jpg";
import port from "./port.jpg";
import zebra from "./zebra.jpg";
import coffee from "./coffee.jpg";
import garden from "./garden.jpg";
import bridge from "./bridge.jpg";
import reserve from "./reserve.jpg";
import baywest from "./baywest.jpg";
import recife from "./recife.jpg";
import boardwalk from "./boardwalk.jpg";
import sardinia from "./sardinia.jpg";
import penguin from "./penguin.jpg";
import shamwari from "./shamwari.jpg";

var carouselSettings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        swipeToSlide: true,
      }
    },
  ]
};
const PortElizabeth = () => (
  <div>
          <h1> Things to do in Port Elizabeth</h1>
          <div className="headline">
            <h4> Popular things to do</h4>
          </div>

          <div className="popular-slider">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={dolphin} />
                <div class="description">
                  <h3>Water Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={activity} />
                <div class="description">
                  <h3>Activity Centres</h3>
                </div>
              </div>
              <div className="img">
                <img src={wildlife} />
                <div class="description">
                  <h3>Animal Encounters</h3>
                </div>
              </div>
              <div className="img">
                <img src={wellness} />
                <div class="description">
                  <h3>Spas &amp; Wellness</h3>
                </div>
              </div>
              <div className="img">
                <img src={nature} />
                <div class="description">
                  <h3>Nature &amp; Wildlife</h3>
                </div>
              </div>
              <div className="img">
                <img src={museums} />
                <div class="description">
                  <h3>Museums</h3>
                </div>
              </div>
              <div className="img">
                <img src={landmark} />
                <div class="description">
                  <h3>Sites &amp; Landmarks</h3>
                </div>
              </div>
              <div className="img">
                <img src={shopping} />
                <div class="description">
                  <h3>Shopping</h3>
                </div>
              </div>
              <div className="img">
                <img src={culture} />
                <div class="description">
                  <h3>Art & Cultural Attractions</h3>
                </div>
              </div>
              <div className="img">
                <img src={outdoor} />
                <div class="description">
                  <h3>Outdoor Tours</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ways to tour Port Elizabeth</h4>
            <h6>Book these experiences for a close-up look at Port Elizabeth.</h6>
          </div>

          <div className="ways-to-tour">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={addo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo Half Day Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(6 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={zebra} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full day Addo Elephant National Park Safari Tour</h6>
                  <p>Shore Exursions Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={elephant} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo Elephant Full Day Safari with a Traditional South African Braai(BBQ) Lunch</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={coffee} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hands-on Coffee Roasting</h6>
                  <p>Cooking Classes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={port} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Port Elizabeth Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={kragga} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Skip the Line: 2-Hour Guided Game Drive at Kragga Kamma Game Park Ticket</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Zoo Tickets &amp; Passes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={whale} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Whale, Dolphin &amp; Penguin Island Cruise</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Catamaran Criuses</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={donkin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>The Donkin Reserve: Uncover Port Elizabeth's lively history on audio tour</h6>
                  <p>Walking Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={garden} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Fun and Adventure: Surges of adrenalin along the famous Garden Route - FD10</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={karoo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4 Day Addo to Karoo Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ports of Call Tours</h4>
          </div>

          <div className="call-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={addo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo Full Day Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={zebra} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full day Addo Elephant National Park Safari Tour</h6>
                  <p>Shore Exursions Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={elephant} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo Elephant Full Day Safari with a Traditional South African Braai(BBQ) Lunch</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={coffee} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hands-on Coffee Roasting</h6>
                  <p>Cooking Classes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={port} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Port Elizabeth Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={kragga} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Skip the Line: 2-Hour Guided Game Drive at Kragga Kamma Game Park Ticket</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Zoo Tickets &amp; Passes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={whale} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Whale, Dolphin &amp; Penguin Island Cruise</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Catamaran Criuses</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={donkin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>The Donkin Reserve: Uncover Port Elizabeth's lively history on audio tour</h6>
                  <p>Walking Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={garden} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Fun and Adventure: Surges of adrenalin along the famous Garden Route - FD10</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={karoo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4 Day Addo to Karoo Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline text-box">
            <h1> Top Attractions in Port Elizabeth</h1>
          </div>

          <Row className='top-attractions'>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={kamma} />
                    <Card.Body>
                      <Card.Title>Kragga Kamma Game Park</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Nature & Wildlife Areas</p>
                        <h6>Admission tickets from ZAR 999.99</h6>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={baywest} />
                    <Card.Body>
                      <Card.Title>Baywest Mall</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(76 Reviews)</p></div>
                        </div>
                        <p>Shopping Malls</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={boardwalk} />
                    <Card.Body>
                      <Card.Title>The Boardwalk Casino &amp; Entertainment World</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Casinos</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={bridge} />
                    <Card.Body>
                      <Card.Title>Storms River Bridge (Paul Sauer Bridge)</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(45 Reviews)</p></div>
                        </div>
                        <p>Bridges</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={shamwari} />
                    <Card.Body>
                      <Card.Title>Shamwari Private Game Reserve</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(434 Reviews)</p></div>
                        </div>
                        <p>Nature & Wildlife Areas</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={sardinia} />
                    <Card.Body>
                      <Card.Title>Sardinia Bay Beach</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(234 Reviews)</p></div>
                        </div>
                        <p>Beaches</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={reserve} />
                    <Card.Body>
                      <Card.Title>The Donkin Reserve</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(85 Reviews)</p></div>
                        </div>
                        <p>Points of Interest &amp; Landmarks</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={recife} />
                    <Card.Body>
                      <Card.Title>Cape Recife Nature Reserve</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(153 Reviews)</p></div>
                        </div>
                        <p>Nature & Wildlife Areas</p>
                        <h6>Admission tickets from ZAR 999.99</h6>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={penguin} />
                    <Card.Body>
                      <Card.Title>Southern African Foundation for the Conservation of Coastal Birds</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Educational Sites</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={elephant} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Port Elizabeth.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <div className="headline">
            <h4> Multi-day Tours</h4>
          </div>

          <div className="multi-day-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={addo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Klein Karoo and Garden Route</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={zebra} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3-Day Karoo Wildlife Adventure</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={elephant} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3-Day Garden Route</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={coffee} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Addo to Karoo Safari</h6>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={port} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Garden Route Explorer Adventure Acccomadted Tour from Port Elizabeth</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={kragga} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Explore The Garden Route from Port Elizabeth</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={whale} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>5 Day Karoo to Coast Tour: Prince Albert; Oudtshoorn; Wilderness &amp; Tsitiskamma</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={donkin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo To Cape Town: Addo- Garden Route - Route 62 - Winelands (6 Days)</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={garden} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Umzantsi - 3 Day Garden Route from Port Elizabeth</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={karoo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4 Day Addo to Karoo Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Shore Excursions</h4>
          </div>

          <div className="shore-excursions">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={kragga} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Explore The Garden Route from Port Elizabeth</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={coffee} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Addo to Karoo Safari</h6>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={port} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Garden Route Explorer Adventure Acccomadted Tour from Port Elizabeth</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={addo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Klein Karoo and Garden Route</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={whale} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>5 Day Karoo to Coast Tour: Prince Albert; Oudtshoorn; Wilderness &amp; Tsitiskamma</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={donkin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo To Cape Town: Addo- Garden Route - Route 62 - Winelands (6 Days)</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={garden} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Umzantsi - 3 Day Garden Route from Port Elizabeth</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={karoo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4 Day Addo to Karoo Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={zebra} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3-Day Karoo Wildlife Adventure</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={elephant} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3-Day Garden Route</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>
  </div>
);

export default PortElizabeth;
