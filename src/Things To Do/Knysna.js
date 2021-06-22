import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import knysnaWildlife from "./knysnaWildlife.jpg";
import knysnaMulti from "./knysnaMulti.jpg";
import knysnaHiking from "./knysnaHiking.jpg";
import knysna4WD from "./knysna4WD.jpg";
import knysnaMonuments from "./knysnaMonuments.jpg";
import knysnaHistorical from "./knysnaHistorical.jpg";
import knysnaCultural from "./knysnaCultural.jpg";
import knysnaExtreme from "./knysnaExtreme.jpg";
import knysnaHeadsLagoon from "./knysnaHeadsLagoon.jpg";
import knysnaDolphin from "./knysnaDolphin.jpg";
import knysnaGarden from "./knysnaGarden.jpg";
import knysnaSunsetSailing from "./knysnaSunsetSailing.jpg";
import knysnaSafari from "./knysnaSafari.jpg";
import knysnaGardenPortElizabeth from "./knysnaGardenPortElizabeth.jpg";
import knysnaEcoAdventure from "./knysnaEcoAdventure.jpg";
import elephant from "./elephant.jpg";
import knysnaAddo from "./knysnaAddo.jpg";
import knysnaMotorbike from "./knysnaMotorbike.jpg";
import knysnaScootours from "./knysnaScootours.jpg";
import knysnaAddoNationalPark from "./knysnaAddoNationalPark.jpg";
import knysnaSelfDrive from "./knysnaSelfDrive.jpg";
import knysnaTsitsikamma from "./knysnaTsitsikamma.jpg";
import knysnaHeads from "./knysnaHeads.jpg";
import knysnaElephant from "./knysnaElephant.jpg";
import knysnaGardenTsitstikamma from "./knysnaGardenTsitsikamma.jpg";
import knysnaBrenton from "./knysnaBrenton.jpg";
import knysnaWildOats from "./knysnaWildOats.jpg";
import knysnaFeatherbed from "./knysnaFeatherbed.jpg";
import knysnaLagoon from "./knysnaLagoon.jpg";
import knysnaBuffaloBay from "./knysnaBuffaloBay.jpg";
import knysnaPrince from "./knysnaPrince.jpg";
import knysnaCoffee from "./knysnaCoffee.jpg";
import knysnaWineTasting from "./knysnaWineTasting.jpg";
import knysnaWineTastingConstantia from "./knysnaWineTastingConstantia.jpg";
import knysnaGardenAccomodation from "./knysnaGardenAccomodation.jpg";
import knysnaDaySail from "./knysnaDaySail.jpg";
import knysnaPaddling from "./knysnaPaddling.jpg";
import knysnaKayaking from "./knysnaKayaking.jpg";
import knysnaEco from "./knysnaEco.jpg";
import knysnaDolphinWatching from "./knysnaDolphinWatching.jpg";
import knysnaHeadsLagoonAdventure from "./knysnaHeadsLagoonAdventure.jpg";

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

const Knysna = () => (
  <div>
          <h1> Things to do in Knysna</h1>
          <div className="headline">
            <h4> Popular things to do</h4>
          </div>

          <div className="popular-slider">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={knysnaWildlife} />
                <div class="description">
                  <h3>Nature &amp; Wildlife</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysnaMulti} />
                <div class="description">
                  <h3>Multi-Day Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysnaHiking} />
                <div class="description">
                  <h3>Hiking Trails</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysna4WD} />
                <div class="description">
                  <h3>4WD Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysnaMonuments} />
                <div class="description">
                  <h3>Monuments & Statues</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysnaHistorical} />
                <div class="description">
                  <h3>Historical Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysnaCultural} />
                <div class="description">
                  <h3>Cultural Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={knysnaExtreme} />
                <div class="description">
                  <h3>Extreme</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ways to tour Knysna</h4>
            <h6>Book these experiences for a close-up look at Knysna.</h6>
          </div>

          <div className="ways-to-tour">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={knysnaHeadsLagoon} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Heads &amp; Lagoon Aventure</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(6 Reviews)</p></div>
                  </div>
                  <p>Speed Boats</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaGarden} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Explore The Garden Route From Johannesburg</h6>
                  <p>Shore Exursions Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaDolphin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Dolphin Watching &amp; Garden Route Coastline Experience</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Marine Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaSunsetSailing} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Sunset Sailing w/ Cruise, Light Meal &amp; Bubbly</h6>
                  <p>Sunset Cruise</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Wildlife Safari In Garden Route</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaGardenPortElizabeth} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Explore garden Route From Port Elizabeth</h6>
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
                <img src={knysnaEcoAdventure} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Eco Adventure (60 Minutes)</h6>
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
            </Slider>
          </div>

          <div className="headline">
            <h4> Tours &amp; Sightseeing</h4>
          </div>

          <div className="call-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={knysnaAddo} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo to Cape Town (Garden Route)</h6>
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
                <img src={knysnaMotorbike} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Karoo Motorbike Experience</h6>
                  <p>Bike Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaScootours} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Knysna Scootours</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Bike Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaAddoNationalPark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Addo National Park, Garden Route, Winelands &amp; Cape Town - 8 Days</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaSelfDrive} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Self Drive Garden Route From Addo</h6>
                  <p>Luxury Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaTsitsikamma} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Tsitiskamma 3 Day Adventure From Port Elizabeth</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline text-box">
            <h1> Top Attractions in Knysna</h1>
          </div>

          <Row className='top-attractions'>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={knysnaHeads} />
                    <Card.Body>
                      <Card.Title>Knysna Heads</Card.Title>
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
                            easily accessible from Knysna.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={knysnaElephant} />
                    <Card.Body>
                      <Card.Title>Knysna Elephant Park</Card.Title>
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
                            easily accessible from Knysna.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={knysnaGardenTsitstikamma} />
                    <Card.Body>
                      <Card.Title>Garden Route (Tsitsikamma, Knysna, Wilderness) National Park</Card.Title>
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
                            easily accessible from Knysna.</p>
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
                    <Card.Img variant="top" src={knysnaBrenton} />
                    <Card.Body>
                      <Card.Title>Brenton On Sea</Card.Title>
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
                    <Card.Img variant="top" src={knysnaFeatherbed} />
                    <Card.Body>
                      <Card.Title>Featherbed Nature Reserve</Card.Title>
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
                            easily accessible from Knysna.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={knysnaWildOats} />
                    <Card.Body>
                      <Card.Title>Wild Oats Community Farmers Market</Card.Title>
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
                            easily accessible from Knysna.</p>
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
                    <Card.Img variant="top" src={knysnaLagoon} />
                    <Card.Body>
                      <Card.Title>Knysna Lagoon</Card.Title>
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
                    <Card.Img variant="top" src={knysnaBuffaloBay} />
                    <Card.Body>
                      <Card.Title>Buffalo Bay</Card.Title>
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
                            easily accessible from Knysna.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={knysnaPrince} />
                    <Card.Body>
                      <Card.Title>Prince Alfred Pass</Card.Title>
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
                            easily accessible from Knysna.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <div className="headline">
            <h4> Food, Wine &amp; Wildlife</h4>
          </div>

          <div className="multi-day-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={knysnaGardenAccomodation} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>12-Day Garden Route Tour w/ Accomodation</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Scenic Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaCoffee} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Delicous Muffin and Tea or Coffee</h6>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaWineTasting} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Wine Tasting - Stellenbosch</h6>
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
                <img src={knysnaWineTastingConstantia} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Wine Tasting in Historical Constantia Valley</h6>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaDaySail} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Knysna Day Sail &amp; Lunch Charter 2.5 Hour</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Water Sports</h4>
          </div>

          <div className="shore-excursions">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={knysnaPaddling} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Stand up Paddle Board Hire - 2 Hours</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaKayaking} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Kayaking</h6>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaEco} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Eco Adventure (60 Minutes)</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaDolphinWatching} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Dolphin Watching on Garden Coastline Experience</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Sped Boats</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={knysnaHeadsLagoonAdventure} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Heads &amp; Lagoon Adventure</h6>
                  <p>Speed Boats</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>
  </div>
);

export default Knysna;
