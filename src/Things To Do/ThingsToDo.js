import './ThingsToDo.css';
import {React ,useState, onValueChange} from "react";
import {Container, Carousel, Row, Col, Button, Form, Card, Tabs, Tab} from 'react-bootstrap';
import Rating from 'react-star-rating-lite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import PortElizabeth from './PortElizabeth';
import Kruger from './Kruger';
import CapeTown from './CapeTown';
import Johannesburg from './Johannesburg';
import Durban from './Durban';
import Knysna from './Knysna';
import Plettenberg from './Plettenberg';
import MosselBay from './MosselBay';
import Hazyview from './Hazyview';

const ThingsToDo = () => (
  <div>
    <Container className="things-to-do-bg" fluid>
      <Row>
          <div className="text-box">
            <h2>Find tours, activities and more</h2>
          </div>
      </Row>
    </Container>
    <Container className="tabs" fluid>
        <Tabs defaultActiveKey="port-elizabeth" id="uncontrolled-tab-example">
          <Tab eventKey="port-elizabeth" title="Port Elizabeth" >
            <PortElizabeth />
          </Tab>
          <Tab eventKey="kruger-national-park" title="Kruger National Park">
            <Kruger />
          </Tab>
          <Tab eventKey="cape-town" title="Cape Town" >
          <div>
            <CapeTown />
          </div>
          </Tab>
          <Tab eventKey="johannesburg" title="Johannesburg" >
            <Johannesburg />
          </Tab>
          <Tab eventKey="durban" title="Durban" >
            <Durban />
          </Tab>
          <Tab eventKey="knysna" title="Knysna" >
            <Knysna />
          </Tab>
          <Tab eventKey="plettenberg-bay" title="Plettenberg Bay" >
            <Plettenberg />
          </Tab>
          <Tab eventKey="hazyview" title="Hazyview" >
            <Hazyview />
          </Tab>
          <Tab eventKey="mossel-bay" title="Mossel Bay" >
            <MosselBay />
          </Tab>
        </Tabs>
    </Container>
  </div>
);

export default ThingsToDo;
