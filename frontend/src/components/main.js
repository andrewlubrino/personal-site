import React, { useState, useEffect } from "react";
import { Col, Row, Navbar } from 'reactstrap';
import Navigation from '../utils/navbar.js';


export default function Main() {
    return (
      <div>
        <Navbar color="warning" />
          <Row className="d-flex justify-content-center mt-5">
            <Col className="col-md-2">
              <h5>Andrew Lubrino</h5>
              <Navigation />
            </Col>
            <Col className="col-md-4">
              <p>
                I am a Baruch College alum and web developer
                currently living in New York City.
              </p>
              <p>
                I'm learning how to bring interesting visualizations 
                to the web. I've worked with SVG and D3.js,
                but recently I've been exploring Three.js and WebGL.
              </p>
            </Col>
          </Row>
      </div>
 
    )
  } 