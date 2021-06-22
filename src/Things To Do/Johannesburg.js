import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jhbZiplining from "./jhbZiplining.jpg";
import jhbActivity from "./jhbActivity.jpg";
import jhbEcoTours from "./jhbEcoTours.jpg";
import jhbParks from "./jhbParks.jpg";
import jhbExtreme from "./jhbExtreme.jpg";
import jhbSafari from "./jhbSafari.jpg";
import jhbMalls from "./jhbMalls.jpg";
import jhbWildlife from "./jhbWildlife.jpg";
import jhb4WD from "./jhb4WD.jpg";
import jhbHorseback from "./jhbHorseback.jpg";
import jhbHiking from "./jhbHiking.jpg";
import jhbSoweto from "./jhbSoweto.jpg";
import jhbMaboneng from "./jhbMaboneng.jpg";
import jhbPilanesburgReserve from "./jhbPilanesburgReserve.jpg";
import jhbSowetoWalking from "./jhbSowetoWalking.jpg";
import jhbMaropengSterkfontein from "./jhbMaropengSterkfontein.jpg";
import jhbUltimatePilanesburg from "./jhbUltimatePilanesburg.jpg";
import jhbApartheidMuseumFullDay from "./jhbApartheidMuseumFullDay.jpg";
import jhbCaptivatingLionPark from "./jhbCaptivatingLionPark.jpg";
import jhbSightseeing from "./jhbSightseeing.jpg";
import jhbHalfDaySoweto from "./jhbHalfDaySoweto.jpg";
import jhbKruger from "./jhbKruger.jpg";
import jhbPilanesburgFullDay from "./jhbPilanesburgFullDay.jpg";
import jhbMaropengCradle from "./jhbMaropengCradle.jpg";
import jhbKrugerPrivate from "./jhbKrugerPrivate.jpg";
import jhbFullDay from "./jhbFullDay.jpg";
import jhbLionPark from "./jhbLionPark.jpg";
import jhbJohannesburgSoweto from "./jhbJohannesburgSoweto.jpg";
import jhbMagaliesburg from "./jhbMagaliesburg.jpg";
import jhbBalloon from "./jhbBalloon.jpg";
import jhbJohannesburgSowetoGuided from "./jhbJohannesburgSowetoGuided.jpg";
import jhbApartheidMuseum from "./jhbApartheidMuseum.jpg";
import jhbGautrain from "./jhbGautrain.jpg";
import jhbMandelaHouse from "./jhbMandelaHouse.jpg";
import jhbGoldReefCity from "./jhbGoldReefCity.jpg";
import jhbHectorMemorial from "./jhbHectorMemorial.jpg";
import jhbHectorMuseum from "./jhbHectorMuseum.jpg";
import jhbVilikazi from "./jhbVilakazi.jpg";
import jhbRegina from "./jhbRegina.jpg";
import jhbConstitutionalHill from "./jhbConstitutionalHill.jpg";
import jhbCradle from "./jhbCradle.jpg";
import jhbSowetoWalkingHalfDay from "./jhbSowetoWalkingHalfDay.jpg";
import jhbRhinoLionPark from "./jhbRhinoLionPark.jpg";
import jhbMagaliesburgBallonSafari from "./jhbMagaliesburgBalloonSafari.jpg";
import jhbSowetoHalfDay from "./jhbSowetoHalfDay.jpg";
import jhbApartheidSoweto from "./jhbApartheidSoweto.jpg";
import jhbPretoriaCity from "./jhbPretoriaCity.jpg";
import jhbLesedi from "./jhbLesedi.jpg";
import jhbSowetoPrivate from "./jhbSowetoPrivate.jpg";
import jhbLocalSoweto from "./jhbLocalSoweto.jpg";
import jhbUltimatePilanesburgFullDay from "./jhbUltimatePilanesburgFullDay.jpg";
import jhbPilanesburgReserveFullDay from "./jhbPilanesburgReserveFullDay.jpg";
import jhbPilanesburgOpenVehicle from "./jhbPilanesburgOpenVehicle.jpg";
import jhbCradleLionPark from "./jhbCradleLionPark.jpg";
import jhbMandelaLegacy from "./jhbMandelaLegacy.jpg";

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
const Johannesburg = () => (
  <div>
          <h1> Things to do in Johannesburg</h1>
          <div className="headline">
            <h4> Popular things to do</h4>
          </div>

          <div className="popular-slider">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={jhbZiplining} />
                <div class="description">
                  <h3>Ziplining</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbActivity} />
                <div class="description">
                  <h3>Activity Centres</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbEcoTours} />
                <div class="description">
                  <h3>Eco Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbParks} />
                <div class="description">
                  <h3>Parks</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbExtreme} />
                <div class="description">
                  <h3>Extreme</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbSafari} />
                <div class="description">
                  <h3>Safaris</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbMalls} />
                <div class="description">
                  <h3>Shopping Malls</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbWildlife} />
                <div class="description">
                  <h3>Nature &amp; Wildlife</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhb4WD} />
                <div class="description">
                  <h3>4WD Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbHorseback} />
                <div class="description">
                  <h3>Horseback Riding</h3>
                </div>
              </div>
              <div className="img">
                <img src={jhbHiking} />
                <div class="description">
                  <h3>Hiking</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ways to tour Johannesburg</h4>
            <h6>Book these experiences for a close-up look at Johannesburg.</h6>
          </div>

          <div className="ways-to-tour">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={jhbApartheidMuseumFullDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Johannesburg Full Day Tour (Soweto and Arpatheid Museum)</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(7 Reviews)</p></div>
                  </div>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbCaptivatingLionPark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Captivating Lion Park Safari (Half-Day Guided)</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbSightseeing} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Hop-On Hop-Off Johannesburg Sightseeing </h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Hop-on Hop-off</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbHalfDaySoweto} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Half-Day Tour of Soweto</h6>
                  <p>City Tour</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbSoweto} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Guided Tour of Johannesburg &amp; Soweto</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbMaboneng} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Maboneng Art Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbPilanesburgReserve} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Tour of Pilanesburg Nature Reserve</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Wildlife Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbSowetoWalking} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Soweto Walking Tour</h6>
                  <p>Walking Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbMaropengSterkfontein} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Maropeng Cradle of Humankind &amp; Sterkfontein Cave Experience</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Cultural Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbUltimatePilanesburg} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Ultimate Full-Day Safari of Pilanesburg National Park</h6>
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
            <h4> Outdoor Activities</h4>
          </div>

          <div className="call-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={jhbKruger} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private 2 Day Safari From Johannesburg to Kruger Park</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbPilanesburgFullDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full day Tour of Pilanesburg Nature Reserve</h6>
                  <p>Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbMaropengCradle} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Experience the Maropeng Cradle of Humankind &amp; Sterkfontein Caves </h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Cultural Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbKrugerPrivate} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private 3 Day Safari From Johannesburgto Kruger Park</h6>
                  <p>Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbFullDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Johannesburg Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbLionPark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Captivating Lion Park Safari (Half-Day Guided)</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(71 Reviews)</p></div>
                  </div>
                  <p>Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbJohannesburgSoweto} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Guided Tour of Johannesburg &amp; Soweto</h6>
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
                <img src={jhbMagaliesburg} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Canopy Tours in Magaliesburg</h6>
                  <p>Walking Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbBalloon} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Early Morning Ballon Safari with Breakfast from Magaliesburg</h6>
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
                <img src={jhbJohannesburgSowetoGuided} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Johannesburg and Soweto Tour</h6>
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
            <h1> Top Attractions in Johannesburg</h1>
          </div>

          <Row className='top-attractions'>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={jhbApartheidMuseum} />
                    <Card.Body>
                      <Card.Title>Apartheid Museum</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Speciality Museums</p>
                        <h6>Admission tickets from ZAR 999.99</h6>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={jhbGautrain} />
                    <Card.Body>
                      <Card.Title>Gautrain</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(76 Reviews)</p></div>
                        </div>
                        <p>Public Transportation Systems</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={jhbMandelaHouse} />
                    <Card.Body>
                      <Card.Title>Nelson Mandela's House</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Historic Sites</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
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
                    <Card.Img variant="top" src={jhbGoldReefCity} />
                    <Card.Body>
                      <Card.Title>Gold Reef City</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(45 Reviews)</p></div>
                        </div>
                        <p>Amusement &amp; Theme Parks • Casinos</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={jhbHectorMemorial} />
                    <Card.Body>
                      <Card.Title>Hector Pieterson Memorial</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(434 Reviews)</p></div>
                        </div>
                        <p>Monuments &amp; Statues</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={jhbHectorMuseum} />
                    <Card.Body>
                      <Card.Title>Hector Pieterson Museum</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(234 Reviews)</p></div>
                        </div>
                        <p>Historic Museums</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
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
                    <Card.Img variant="top" src={jhbVilikazi} />
                    <Card.Body>
                      <Card.Title>Vilikazi Street</Card.Title>
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
                    <Card.Img variant="top" src={jhbRegina} />
                    <Card.Body>
                      <Card.Title>Regina Mundi</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(153 Reviews)</p></div>
                        </div>
                        <p>Churches &amp; Cathedrals</p>
                        <h6>Admission tickets from ZAR 999.99</h6>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={jhbConstitutionalHill} />
                    <Card.Body>
                      <Card.Title>Constitution Hill Humans Rights Precinct</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Historic Sites • Points of Interest &amp; Landmarks</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={jhbSowetoWalking} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Johannesburg.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <div className="headline">
            <h4> Half-Day Tours</h4>
          </div>

          <div className="multi-day-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={jhbCradle} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cradle of Humankind</h6>
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
                <img src={jhbSowetoWalkingHalfDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Soweto Walking Tours</h6>
                  <p>Walking Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbRhinoLionPark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Half-Day Rhino &amp; Lion Park Safari</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(137 Reviews)</p></div>
                  </div>
                  <p>Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbMagaliesburg} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Early Morning Ballon Safari with Breakfast from Magaliesburg</h6>
                  <p> Ballon Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbSowetoHalfDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Half-Day Tour of Soweto</h6>
                  <p>City Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbApartheidSoweto} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Apartheid Museum &amp; Soweto Tour</h6>
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
                <img src={jhbPretoriaCity} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Pretoria City Tour</h6>
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
                <img src={jhbLesedi} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cultural Village Tour of Lesedi</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbSowetoPrivate} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Soweto Tour From Johannesburg or Pretoria (5 Hours)</h6>
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
                <img src={jhbLocalSoweto} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>An Authentic,True &amp; Bespoke Day with Soweto Locals</h6>
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
            <h4> Full-Day Tours</h4>
          </div>

          <div className="shore-excursions">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={jhbJohannesburgSoweto} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Tour of Johannesburg (Soweto &amp; Apartheid Museum)</h6>
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
                <img src={jhbPilanesburgReserve} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full-Day Tour of Pilanesburg Nature Reserve</h6>
                  <p>Wildlife Safaris</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbApartheidMuseum} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Tour of Soweto &amp; Apartheid Museum (Guided)</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbMandelaLegacy} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Mandela Legacy Day Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Historic Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbApartheidMuseumFullDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Apartheid Museum Privte Day Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Museum</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbJohannesburgSowetoGuided} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full-Day tour of Soweto(with Lunch) </h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbUltimatePilanesburgFullDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Ultimate Full-Day Safari of Pilanesburg National Park</h6>
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
                <img src={jhbPilanesburgReserveFullDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Safari Tour of Pilanesburg Nature Reserve</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbPilanesburgOpenVehicle} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>One Day Safari to Pilanesburg With 5 Hour Open Vehicle Safari</h6>
                  <p>Wildlife Safari</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={jhbCradleLionPark} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Tour of Cradle of Humankind with a Lion Safari</h6>
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

export default Johannesburg;
