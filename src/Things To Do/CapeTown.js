import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import capeWaterTours from "./capeWaterTours.jpg";
import capeTipsy from "./capeTourTipsy.jpg";
import capeGoodHopePoint from "./capeGoodHopePoint.jpg";
import capeStellenboschWineTasting from "./capeStellenboschWineTasting.jpg";
import capeDineSunset from "./capeDineSunset.jpg";
import capeInternationalBartender from "./capeInternationalBartender.jpg";
import capeAfricanStoryTours from "./capeAfricanStoryTours.jpg";
import capeStellenboschFranschhoek from "./capeStellenboschFranschhoek.jpg";
import capeFullDayTour from "./capeFullDayTour.jpg";
import capeSafari from "./capeSafari.jpg";
import capeStellenboschHalfDay from "./capeStellenboschHalfDay.jpg";
import capeCruiseDine from "./capeCruiseDine.jpg";
import capeStellenboschWinelands from "./capeStellenboschWinelands.jpg";
import capeFranschhoekTram from "./capeFranschhoekTram.jpg";
import capeAquila from "./capeAquila.jpg";
import capeAquilaSafari from "./capeAquilaSafari.jpg";
import capeCoastalMotor from "./capeCoastalMotor.jpg";
import capeGlamping from "./capeGlamping.jpg";
import cape2DaySafari from "./cape2DaySafari.jpg";
import capeAddoSafari from "./capeAddoSafari.jpg";
import capeBeerTasting from "./capeBeerTasting.jpg";
import capeHotAirBalloon from "./capeHotAirBalloon.jpg";
import capeBigFiveSafari from "./capeBigFiveSafari.jpg";
import capeOceanWildlife from "./capeOceanWildlife.jpg";
import capeGardenRoute from "./capeGardenRoute.jpg";
import capeWineTasting from "./capeWineTasting.jpg";
import capeCulture from "./capeCulture.jpg";
import capeSimons from "./capeSimons.jpg";
import capeCentral from "./capeCentral.jpg";
import capeConstantia from "./capeConstantia.jpg";
import capeSomerest from "./capeSomerest.jpg";
import capeSpas from "./capeSpas.jpg";
import capeNature from "./capeNature.jpg";
import capeCruise from "./capeCruise.jpg";
import museums from "./museums.jpg";
import capeFood from "./capeFood.jpg";
import capeActivity from "./capeActivity.jpg";
import capeCostalMotor from "./capeCostalMotor.jpg";
import capeCableway from "./capeCableway.jpg";
import capeGoodHopePenguin from "./capeGoodHopePenguin.jpg";
import capeGoodHope from "./capeGoodHope.jpg";
import capeSightseeing from "./capeSightseeing.jpg";
import capeSunsetCruise from "./capeSunsetCruise.jpg";
import capeAfricanStory from "./capeAfricanStory.jpg";
import capePointPenguins from "./capePointPenguins.jpg";
import capeFranschhoek from "./capeFranschhoek.jpg";
import capeWineFarms from "./capeWineFarms.jpg";
import capePointTableMountain from "./capePointTableMountain.jpg";
import capeTableMountain from "./capeTableMountain.jpg";
import capeNatureReserve from "./capeNatureReserve.jpg";
import capeVictoria from "./capeVictoria.jpg";
import capeSealIsland from "./capeSealIsland.jpg";
import capeLionsHead from "./capeLionsHead.jpg";
import capeBouldersPenguins from "./capeBouldersPenguins.jpg";
import capeVergelegen from "./capeVergelegen.jpg";
import capeChapmansPeak from "./capeChapmansPeak.jpg";

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
const CapeTown = () => (
  <div>
          <h1> Things to do in Cape Town</h1>
          <div className="headline">
            <h4> Popular things to do</h4>
          </div>

          <div className="popular-slider">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={capeWaterTours} />
                <div class="description">
                  <h3>Water Tours</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeTipsy} />
                <div class="description">
                  <h3>Tours to get Tipsy</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeCruise} />
                <div class="description">
                  <h3>Cruises &amp; Sailing</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeSpas} />
                <div class="description">
                  <h3>Spas &amp; Wellness</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeNature} />
                <div class="description">
                  <h3>Nature &amp; Wildlife</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeFood} />
                <div class="description">
                  <h3>Food &amp; Drink</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeActivity} />
                <div class="description">
                  <h3>Activity Centers</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeCulture} />
                <div class="description">
                  <h3>Art & Cultural Attractions</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Popular Places in Cape Town</h4>
          </div>

          <div className="popular-places">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={capeSimons} />
                <div class="description">
                  <h3>Simon's Town</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeCentral} />
                <div class="description">
                  <h3>Cape Town Central</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeConstantia} />
                <div class="description">
                  <h3>Constania</h3>
                </div>
              </div>
              <div className="img">
                <img src={capeSomerest} />
                <div class="description">
                  <h3>Somerest West</h3>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Ways to tour Cape Town</h4>
            <h6>Book these experiences for a close-up look at Cape Town.</h6>
          </div>

          <div className="ways-to-tour">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={capeGoodHope} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape of Good Hope Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(85 Reviews)</p></div>
                  </div>
                  <p>Car Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeFranschhoek} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Franschhoek Wine Tram Tour</h6>
                  <p>Tram Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeSightseeing} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape Town City Sightseeing Official Hop-on-Hop-off Bus</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(638 Reviews)</p></div>
                  </div>
                  <p>Hop on Hop Off</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeWineFarms} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Stellenbosch &amp; Franschhoek Winelands Full Day Shared Tour</h6>
                  <p>Wine Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capePointPenguins} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape of Good Hope- Cape Point &amp; Penguins Private Tour</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeCostalMotor} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Coastal Motor Cruise</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(289 Reviews)</p></div>
                  </div>
                  <p>Catamaran Cruises</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeSunsetCruise} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Sunset Champagne Cruise</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(296 Reviews)</p></div>
                  </div>
                  <p>Sunset Criuses</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeAfricanStory} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>African Story Wine Tours</h6>
                  <p>Wine Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capePointTableMountain} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Table Mountain, Penguins &amp; Cape Point Small Group Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(4 Reviews)</p></div>
                  </div>
                  <p>Day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeGoodHopePenguin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape of Good Hope &amp; Penguins Small Group Tour</h6>
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
            <h1> Top Attractions in Cape Town</h1>
          </div>

          <Row className='top-attractions'>
            <Col lg={4}>
              <Carousel interval={null}>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeCableway} />
                    <Card.Body>
                      <Card.Title>Table Mountain Aerial Cableway</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(60 Reviews)</p></div>
                        </div>
                        <p>Trams</p>
                        <p>Open Now</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeVictoria} />
                    <Card.Body>
                      <Card.Title>Victoria &amp; Alfred Waterfront</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(76 Reviews)</p></div>
                        </div>
                        <p>Marinas • Piers &amp; Boardwalks</p>
                        <p>Open Now</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeLionsHead} />
                    <Card.Body>
                      <Card.Title>Lions Head</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Mountains</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
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
                    <Card.Img variant="top" src={capeTableMountain} />
                    <Card.Body>
                      <Card.Title>Table Mountain</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(594 Reviews)</p></div>
                        </div>
                        <p>Mountains</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeChapmansPeak} />
                    <Card.Body>
                      <Card.Title>Chapman's Peak Drive</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(434 Reviews)</p></div>
                        </div>
                        <p>Scenic Drive</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeBouldersPenguins} />
                    <Card.Body>
                      <Card.Title>Boulders Beach Penguin Colony</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(234 Reviews)</p></div>
                        </div>
                        <p>Beaches • Nature &amp; Wildlife Areas</p>
                        <p>Open Now</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
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
                    <Card.Img variant="top" src={capeNatureReserve} />
                    <Card.Body>
                      <Card.Title>Cape Point Nature Reserve</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(5 Reviews)</p></div>
                        </div>
                        <p>Nature &amp; Wildlife Areas</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeSealIsland} />
                    <Card.Body>
                      <Card.Title>Seal Island</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='4'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(153 Reviews)</p></div>
                        </div>
                        <p>Island</p>
                        <h6>Admission tickets from ZAR 999.99</h6>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
                <Carousel.Item>
                  <Card className="mx-auto" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={capeVergelegen} />
                    <Card.Body>
                      <Card.Title>Vergelegen Estate</Card.Title>
                      <Card.Text>
                        <div className='rating'>
                          <Rating
                            value='5'
                            weight="14"
                            readonly
                          />
                          <div className='review'><p>(6 Reviews)</p></div>
                        </div>
                        <p>Wineries &amp; Vineyards</p>

                        <Card className="mx-auto flex-row flex-wrap author" >
                          <Card.Img variant="top" src={capeSightseeing} />
                          <Card.Body>
                            <Card.Text>
                              <p>By <span>area44</span></p>
                            </Card.Text>
                          </Card.Body>
                        </Card>

                        <div className="comment">
                          <p>I would definitely recommend the Kragga Kamma Game Park,so well-maintained and
                            easily accessible from Cape Town.</p>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <div className="headline">
            <h4> Food, Wine  &amp; Nightlife</h4>
          </div>

          <div className="call-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={capeDineSunset} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cruise &amp; Dine Dinner: Sunset Champagne</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(55 Reviews)</p></div>
                  </div>
                  <p>Sailing</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeInternationalBartender} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6> International Bartenders Course</h6>
                  <p>Mixology Classes</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeAfricanStoryTours} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>African Story Wine Tours</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(37 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeStellenboschFranschhoek} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Stellenbosch and Franschhoek Winelands Full Day Shared Tour</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeFullDayTour} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Cape Town Tour</h6>
                  <p>Full-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Wildlife Safari, Olive, Beer and Wine Tasting Day Tour from Cape Town</h6>
                  <div className='rating'>
                    <Rating
                      value='3'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(984 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeStellenboschHalfDay} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Stellenbosch Half-Day Wine Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Wine Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeCruiseDine} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cruise and Dine Lunch: Coastal Motor Cruise and 2-Course Lunch</h6>
                  <p>Sailing</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeStellenboschWinelands} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Halfday Stellenbosch Winelands Tour from Cape Town</h6>
                  <div className='rating'>
                    <Rating
                      value='2'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(2 Reviews)</p></div>
                  </div>
                  <p>Wine Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeFranschhoekTram} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Franschhoek Wine Tram Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(34 Reviews)</p></div>
                  </div>
                  <p>Tram Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
            </Slider>
          </div>

          <div className="headline">
            <h4> Multi-day &amp; Extended Tours</h4>
          </div>

          <div className="multi-day-tours">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={capeAquilaSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Private Full Day Aquila Safari Game Reserve Tour</h6>
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
                <img src={capeGlamping} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>2-Day Glamping South African Wildlife Safari Small Group Tour</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={cape2DaySafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>2-Day Safari Experince from Cape Town</h6>
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
                <img src={capeAddoSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>6-Day Cape to Addo Safari</h6>
                  <p>Multi-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeAquila} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Aquilla Game Reserve Wildlife Safari</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeCoastalMotor} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Coastal Motor Cruise</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(20 Reviews)</p></div>
                  </div>
                  <p>Catamaran Cruise</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeHotAirBalloon} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Half-Day Small Group Hot Air Ballon Tour</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(102 Reviews)</p></div>
                  </div>
                  <p>Half-day Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeOceanWildlife} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Ocean Wildlife Encounter</h6>
                  <p>Water Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeBeerTasting} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Wildlife Safari, Olive, Beer and Wine Tasting Day Tour</h6>
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
                <img src={capeBigFiveSafari} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Big Five Safari Full Day Guided Private Transfer from Cape Town</h6>
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
            <h4>Day Trips</h4>
          </div>

          <div className="shore-excursions">
            <Slider {...carouselSettings}>
              <div className="img">
                <img src={capeCostalMotor} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape Peninsula Guided Private Day Trip From Cape Town</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(707 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeWineFarms} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape of Good Hope &amp; Penguins Small Group Tour From Cape Town</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeGardenRoute} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>4-Day Garden Route Explorer Adventure Acccomadated Tour from Cape Town</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeWineTasting} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Wine Tour to Stellenbosch &amp; Franschhoek | Includes Lunch &amp; Tastings</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(59 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeSunsetCruise} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Full Day Franschhoek Wine Tram Tour From Cape Town</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(113 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeGoodHopePoint} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Cape of Good Hope - Cape Point &amp; Penguins Private Tour From Cape Town</h6>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capePointTableMountain} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Wildlife Safari, Olive, Beer &amp; Wine Tasting Day Tour From Cape Town</h6>
                  <div className='rating'>
                    <Rating
                      value='5'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(4 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeGoodHopePenguin} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6>Table Mountain, Penguins &amp; Cape Point Small Tour From Cape Town</h6>
                  <div className='rating'>
                    <Rating
                      value='4'
                      weight="14"
                      readonly
                    />
                    <div className='review'><p>(78 Reviews)</p></div>
                  </div>
                  <p>Bus Tours</p>
                  <h6> from R999,99 per adult</h6>
                </div>
              </div>
              <div className="img">
                <img src={capeStellenboschWineTasting} />
                <div class="heart">
                  <a href="#"><FontAwesomeIcon className="icon" icon= {faHeart} size="lg" /></a>
                </div>
                <div className='description'>
                  <h6> Stellenbosch Half Day Wine Tour</h6>
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

export default CapeTown;
