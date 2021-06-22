import React, { useState } from "react";
import { withRouter } from 'react-router';
import {Navbar, NavDropdown} from 'react-bootstrap'
import {Container, Row, Col, Nav, Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import FormControl from 'react-bootstrap/FormControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {faSearch, faPhoneAlt, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'

const Navigation = () => {

  return (
    <Navbar className="navbar" expand="xl">
      <Navbar.Brand className="navbar-brand" href="#home"><FontAwesomeIcon className="icon" icon= {faCalendarCheck} size="lg" /> Vibe Check</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbar-link" href="/home">Home</Nav.Link>
          <Nav.Link className="navbar-link" href="/about">About</Nav.Link>
          <Nav.Link className="navbar-link" href="/trips">Trips</Nav.Link>
          <Nav.Link className="navbar-link" href="/thingstodo">Things to do</Nav.Link>
          <Nav.Link className="navbar-link" href="/contact">Contact</Nav.Link>
        </Nav>
        <Form inline className="form">
          <Nav.Link className="contact-number"><FontAwesomeIcon className="icon" icon= {faPhoneAlt} size="md" /> 10(101)-010 101</Nav.Link>
          <Nav.Link className="social-item twitter"><FontAwesomeIcon  icon= {faTwitter} size="md" /></Nav.Link>
          <Nav.Link className="social-item facebook"><FontAwesomeIcon icon= {faFacebookF} size="md" /></Nav.Link>
          <Nav.Link className="social-item instagram"><FontAwesomeIcon icon= {faInstagram} size="md" /></Nav.Link>
          <Nav.Link className="social-item linkedIn"><FontAwesomeIcon icon= {faLinkedinIn} size="md" /></Nav.Link>
          <Button className="search"><FontAwesomeIcon icon= {faSearch} size="lg" /></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
 };

 export default Navigation;
