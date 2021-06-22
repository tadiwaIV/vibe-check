import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import durban4WD from "./durban4WD.jpg";
import elephant from "./durban4WD.jpg";
import durbanExtreme from "./durbanExtreme.jpg";
import durbanHiking from "./durbanHiking.jpg";
import durbanDayTrips from "./durbanDayTrips.jpg";
import durbanWildlife from "./durbanWildlife.jpg";
import durbanMuseums from "./durbanMuseums.jpg";
import durbanArchaeology from "./durbanArchaeology.jpg";
import durbanArt from "./durbanArt.jpg";
import durbanCultural from "./durbanCultural.jpg";
import durbanHistoric from "./durbanHistoric.jpg";
import durbanGondola from "./durbanGondola.jpg";
import durbanBikes from "./durbanBikes.jpg";
import durbanPicnic from "./durbanPicnic.jpg";
import durbanBig5 from "./durbanBig5.jpg";
import durbanAngloZulu from "./durbanAngloZulu.jpg";
import durbanLuxuryCruise from "./durbanLuxuryCruise.jpg";
import durbanGondolaNight from "./durbanGondolaNight.jpg";
import durbanNatalLionPark from "./durbanNatalLionPark.jpg";
import durbanOracle from "./durbanOracle.jpg";
import durbanPedal from "./durbanPedal.jpg";
import durbanHluhluwe from "./durbanHluhluwe.jpg";
import durbanHluhluweBig5 from "./durbanHluhluweBig5.jpg";
import durbanPrivateHalfDay from "./durbanPrivateHalfDay.jpg";
import durbanPhezulu from "./durbanPhezulu.jpg";
import durbanTalaMini from "./durbanTalaMini.jpg";
import durbanPhezuluReptilePark from "./durbanPhezuluReptilePark.jpg";
import durbanValley from "./durbanValley.jpg";
import durbanHluhluweImfolozi from "./durbanHluhluweImfolozi.jpg";
import durbanUshaka from "./durbanUshaka.jpg";
import durbanValley1000Hills from "./durbanValley1000Hills.jpg";
import durbanBotanicGardens from "./durbanBotanicGardens.jpg";
import durbanUshakaWetWild from "./durbanUshakaWetWild.jpg";
import durbanMoses from "./durbanMoses.jpg";
import durbanGoldenMile from "./durbanGoldenMile.jpg";
import durbanUmgeni from "./durbanUmgeni.jpg";
import durbanSuncoast from "./durbanSuncoast.jpg";
import durbanHluhluweImfoloziUltimate from "./durbanHluhluweImfoloziUltimate.jpg";
import durbanTala from "./durbanTala.jpg";
import durbanBig5Safari from "./durbanBig5Safari.jpg";
import durbanHerbalist from "./durbanHerbalist.jpg";
import durbanHalfDaySafari from "./durbanHalfDaySafari.jpg";
import durbanDumazulu from "./durbanDumazulu.jpg";
import durbanPhezuluPrivateSafari from "./durbanPhezuluPrivateSafari.jpg";
import durbanSaniPass from "./durbanSaniPass.jpg";
import durbanNatalTala from "./durbanNatalTala.jpg";
import durbanContinuousSafari from "./durbanContinuousSafari.jpg";
import durbanSaniPassWalking from "./durbanSaniPassWalking.jpg";
import durbanInnerCityJewels from "./durbanInnerCityJewels.jpg";
import durbanZuluMarket from "./durbanZuluMarket.jpg";
import durbanNightlife from "./durbanNightlife.jpg";
import durbanLocal from "./durbanLocal.jpg";
import durbanWalkingSafari from "./durbanWalkingSafari.jpg";
import durbanZululand from "./durbanZululand.jpg";
import durbanDrakensberg from "./durbanDrakensberg.jpg";
import durbanWalkingTour from "./durbanWalkingTour.jpg";
import durbanCastleRock from "./durbanCastleRock.jpg";

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
const Durban = () => (
  <div>
          <h1> Things to do in Durban</h1>
          <div className="headline">
            <h4> Popular things to do</h4>
          </div>

          <div className="popular-slider">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={durban4WD} />
                <div class="description">
                  <h3>4WD Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanExtreme} />
                <div class="description">
                  <h3>Extreme</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanHiking} />
                <div class="description">
                  <h3>Hiking</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanDayTrips} />
                <div class="description">
                  <h3>Day Trips</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanWildlife} />
                <div class="description">
                  <h3>Nature &amp; Wildlife</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanMuseums} />
                <div class="description">
                  <h3>Museums</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanArchaeology} />
                <div class="description">
                  <h3>Archaeology Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanArt} />
                <div class="description">
                  <h3>Art Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanCultural} />
                <div class="description">
                  <h3>Cultural Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={durbanHistoric} />
                <div class="description">
                  <h3>Historical Tours</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ways to tour Durban</h4>
            <h6>Book these experiences for a close-up look at Durban.</h6>
          </div>

          <div className="ways-to-tour">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={durbanGondola} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>African Gondola Boat Ride at Durban Point Waterfront Canal</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(6 Reviews)</p></div>
                  </div>
                  <p>Private Sightseeing Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanBikes} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Durban Bike Rental</h6>
                  <p>Rentals</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanPicnic} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Good Vibes Only Picnic Setup</h6>
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
                <img src={durbanBig5} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Big 5 Safari</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanAngloZulu} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Small-Group Tour of Anglo-Zulu Battlefields</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanLuxuryCruise} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Luxury Boat Cruise at Durban Point Waterfront Canals</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Speed Boats</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanGondolaNight} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Magical Gondola Night Rides</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Private Sightseeing Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanNatalLionPark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>1 Day Tour of Natal Lion Park, Tala Game Reserve &amp; Phezulu Cultural Village</h6>
                  <p>Safari Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanOracle} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Zulu Oracle &amp; Hebalist Experience </h6>
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
                <img src={durbanPedal} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Pedal Boat Rides (Durban Point Waterfront Canals)</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Self Guided Tours &amp; Rentals</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Family Friendly</h4>
          </div>

          <div className="call-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={durbanHluhluwe} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hluhluwe Game Reserve</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanHluhluweBig5} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hluhluwe Big 5 Day Tour</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanPrivateHalfDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Half-Day Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Half-day Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanPhezulu} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Phezulu Village Private Day Tour</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanTalaMini} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Tala Mini-Day Safari</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanPhezuluReptilePark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Phezulu Cultural Village &amp; Reptile Park</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Cultural Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanValley} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Valley of a Thousand Hills</h6>
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
                <img src={durbanHluhluweImfolozi} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6> Hluhluwe Imfolozi &amp; Emdondeni Wild Cat Project Private Safari</h6>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline text-box">
            <h1> Top Attractions in Durban</h1>
          </div>

          <Row className='top-attractions'>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanUshaka} />
                    <Card.Body>
                      <Card.Title>uShaka Marine World</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Nature &amp; Wildlife Areas • Water Parks</p>
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
                            easily accessible from Durban.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanValley1000Hills} />
                    <Card.Body>
                      <Card.Title>The Valley of 1000 Hills</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(76 Reviews)</p></div>
                        </div>
                        <p>Valleys</p>

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
                            easily accessible from Durban.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanBotanicGardens} />
                    <Card.Body>
                      <Card.Title>Durban Botanic Gardens</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Gardens</p>

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
                            easily accessible from Durban.</p>
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
                    <Card.Img variant="top" src={durbanPhezulu} />
                    <Card.Body>
                      <Card.Title>Phezulu Safari Park</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(45 Reviews)</p></div>
                        </div>
                        <p>Nature &amp; Wildlife Areas</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanUshakaWetWild} />
                    <Card.Body>
                      <Card.Title>uShaka Wet 'n Wild</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(434 Reviews)</p></div>
                        </div>
                        <p>Water Parks</p>

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
                            easily accessible from Durban.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanMoses} />
                    <Card.Body>
                      <Card.Title>Moses Mabhida Stadium</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(234 Reviews)</p></div>
                        </div>
                        <p>Arenas &amp; Stadiums</p>

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
                            easily accessible from Durban.</p>
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
                    <Card.Img variant="top" src={durbanGoldenMile} />
                    <Card.Body>
                      <Card.Title>Golden Mile</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(85 Reviews)</p></div>
                        </div>
                        <p>Beaches</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanUmgeni} />
                    <Card.Body>
                      <Card.Title>Umgeni River Bird Park</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(153 Reviews)</p></div>
                        </div>
                        <p>Parks</p>
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
                            easily accessible from Durban.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={durbanSuncoast} />
                    <Card.Body>
                      <Card.Title>Suncoast Casino</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Casino</p>

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
                            easily accessible from Durban.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <div className="headline">
            <h4> Cultural Tours &amp; Safaris</h4>
          </div>

          <div className="multi-day-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={durbanHluhluweImfoloziUltimate} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Unlimited 2 Day Hluhluwe Imfolozi Game Reserve Game Drive</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanTala} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Tala Mini-Day Safari</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanBig5Safari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Big 5 Day Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanHerbalist} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Zulu Oracle &amp; Herbalist Private Experience</h6>
                  <p>Cultural Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanHalfDaySafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Half-Day Safari</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanDumazulu} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hluhluwe Imfolozi Safari &amp; Dumazulu Cultural Private Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari &amp; Cultural Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanPhezuluPrivateSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Phezulu Village Private Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanSaniPass} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Sani Pass Luxury Minivan Tour</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanNatalTala} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>1 Day Tour of Natal Lion Park, Tala Game Reserve &amp; Phezulu Cultural Village</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanContinuousSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hluhluwe Imfolozi Game Reserve 3 Day Continous Safari</h6>
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
            <h4> Walking &amp; Biking Tours</h4>
          </div>

          <div className="shore-excursions">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={durbanSaniPassWalking} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Sani Pass</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Day Trips</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanInnerCityJewels} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Inner City Jewels Walking Tour</h6>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanZuluMarket} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Durban City Tour (Including a Tour of The Zulu Markets)</h6>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanNightlife} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Zulu Nightlife With a Local</h6>
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
                <img src={durbanLocal} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Durban Like A Local (Private Tour)</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanWalkingSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Adrenaline Junkies Walking Safari with Zeiss Binoculars</h6>
                  <p>Walking Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanZululand} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Guided Tour of Shakaland Zulu Village</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanDrakensberg} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Drankensberg World Heritage</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanWalkingTour} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cultural Walking Tour of Durban</h6>
                  <p>Walking Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={durbanCastleRock} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Giants Castle Rock Art, The Midlands &amp; Mandela Capture Site</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>
  </div>
);

export default Durban;
