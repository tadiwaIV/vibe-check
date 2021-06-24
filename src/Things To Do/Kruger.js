import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    }
  ]
};
const Kruger = () => (
  <div>
          <h1> Things to do in Kruger National Park</h1>
          <div className="headline">
            <h4> Popular things to do</h4>
          </div>

          <div className="popular-slider">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src="/img/krugerCulture.jpg" />
                <div class="description">
                  <h3>Art &amp; cultural attractions</h3>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerSpas.jpg" />
                <div class="description">
                  <h3>Spas &amp; Wellness</h3>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerNature.jpg" />
                <div class="description">
                  <h3>Nature &amp; Wildlife</h3>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerTourists.jpg" />
                <div class="description">
                  <h3>Tours perfect for tourists</h3>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerOutdoorTours.jpg" />
                <div class="description">
                  <h3>Outdoor Tours</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ways to tour Kruger National Park</h4>
            <h6>Book these experiences for a close-up look at Kruger National Park.</h6>
          </div>

          <div className="ways-to-tour">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src="/img/krugerMorningSafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Morning Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(92 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerOpenVehicle.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full day Guided Open Vehicle Safari Tours</h6>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerVillageTours.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Village Tours + Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(13 Reviews)</p></div>
                  </div>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGuidedSafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Private Guided Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerAfternoonSafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Afternoon Half-Day Safari</h6>
                  <p>Afternoon Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerSafariFromHazyview.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full-Day Safari From Hazyview</h6>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateFullDaySafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Full-Day Safari Trip</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerFullDaySafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Kruger National Park Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerHalfDayGameDrive.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Half-Day Game Drive</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(207 Reviews)</p></div>
                  </div>
                  <p>Zoo Tickets &amp; Passes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerBlydeRiver.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>2 Days, One Night Tour: Blyde River</h6>
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
            <h4> Private &amp; Custom Tours</h4>
          </div>

          <div className="call-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src="/img/krugerKidsSafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kids On Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerGuidedSafariFromHazyview.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Privte Full-Day Safari From Hazyview</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(39 Reviews)</p></div>
                  </div>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateVehicleGuide.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Private Full-Day Safari - Private Safari Vehicle &amp; Guide</h6>
                  <p>Day Trips</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerFullDayTour.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>The Kruger National Park - Full-Day Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerFullDaySafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Kruger National Park Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/kruger3DayPrivateTour.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3 Day Central Kruger National Park - Private Safari Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(286 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerClassic.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Classic Kruger National Park</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGudedGameDrive.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Guided Morning Game Drive</h6>
                  <p>Private and Luxury</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGuidedAfternoonGameDrive.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Private Guided Afrternoon Game Drive</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(47 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGuidedTour.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Private Guided Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(3 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline text-box">
            <h1> Top Attractions in Kruger National Park</h1>
          </div>

          <Row className='top-attractions'>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerLonelyBullTrail.jpg" />
                    <Card.Body>
                      <Card.Title>Lonely Bull Trail</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Hiking trails</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerPhalaborwaGate.jpg" />
                    <Card.Body>
                      <Card.Title>Game Drives at Phalaborwa Gate</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(36 Reviews)</p></div>
                        </div>
                        <p>Hiking Trails</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerTshokwane.jpg" />
                    <Card.Body>
                      <Card.Title>Tshokwane Picnic Site</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Points of Interest &amp; Landmarks</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
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
                    <Card.Img variant="top" src="/img/krugerNkuhlu.jpg" />
                    <Card.Body>
                      <Card.Title>Nkuhlu Picnic Site</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(55 Reviews)</p></div>
                        </div>
                        <p>Points of Interest &amp; Landmarks</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerBushmans.jpg" />
                    <Card.Body>
                      <Card.Title>Bushmans Trail</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(434 Reviews)</p></div>
                        </div>
                        <p>Hiking Trails</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerNyalaland.jpg" />
                    <Card.Body>
                      <Card.Title>Nyalaland Trail</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(234 Reviews)</p></div>
                        </div>
                        <p>Hiking Trail</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
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
                    <Card.Img variant="top" src="/img/krugerWolhuter.jpg" />
                    <Card.Body>
                      <Card.Title>Wolhuter Wilderness Trail</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='3'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(492 Reviews)</p></div>
                        </div>
                        <p>Hiking Trails</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerNapi.jpg" />
                    <Card.Body>
                      <Card.Title>Napi Wilderness Trail</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(153 Reviews)</p></div>
                        </div>
                        <p>Hiking Trail</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="/img/krugerOlifants.jpg" />
                    <Card.Body>
                      <Card.Title>Olifants Wilderness Trail</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(635 Reviews)</p></div>
                        </div>
                        <p>Hiking Trails</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src="/img/krugerVillageTours.jpg" />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Kruger National Park.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <div className="headline">
            <h4> Shows, Concerts &amp; Sports</h4>
          </div>

          <div className="multi-day-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src="/img/kruger3DayPrivateTour.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3 Day Central Kruger National Park - Private Safari Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(286 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerSafariFromHazyview.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full-Day Safari From Hazyview</h6>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerClassic.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Classic Kruger National Park</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateFullDaySafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Full-Day Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGudedGameDrive.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Guided Morning Game Drive</h6>
                  <p>Private and Luxury</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerFullDaySafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Kruger National Park Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGuidedAfternoonGameDrive.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Private Guided Afrternoon Game Drive</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(47 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerHalfDayGameDrive.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Half-Day Game Drive</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(207 Reviews)</p></div>
                  </div>
                  <p>Zoo Tickets &amp; Passes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateGuidedTour.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Private Guided Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(3 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerBlydeRiver.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>2 Days, One Night Tour: Blyde River</h6>
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
            <h4> Multi-Day &amp; Extended Tours</h4>
          </div>

          <div className="shore-excursions">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src="/img/krugerUnderCanvas.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger Under Canvas Escorted Safari 4-Nights</h6>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerAfternoonSafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Afternoon Half-Day Safari</h6>
                  <p>Afternoon Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerFullDayTour.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>The Kruger National Park - Full-Day Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPanoramaRoute.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4 Day Safari at 5-Star Kapama Game Reservewith Panorama Route</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(763 Reviews)</p></div>
                  </div>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateVehicleGuide.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Private Full-Day Safari - Private Safari Vehicle &amp; Guide</h6>
                  <p>Day Trips</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerGreaterKruger.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4 Day Greater Kruger National Park Adventure Safari </h6>
                  <p>Multi-Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerPrivateLuxury.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>5 Day Luxury Privte Kruger &amp; Sabi Sands Singita Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(9 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerAllIncl.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>5 Day All Incl. Private Kruger Park Safari With Optional Panorama</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(13 Reviews)</p></div>
                  </div>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerSkukuza.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>3 Day Tour of Kruger National Park from Skukuza Airport</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src="/img/krugerMorningSafari.jpg" />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kruger National Park Morning Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(92 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>
  </div>
);

export default Kruger;
