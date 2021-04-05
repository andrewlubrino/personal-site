import React from "react";
import { Row, Col, NavLink, Nav, Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

export default function Projects() {
    return (
      <div className="d-flex justify-content-center">
        <Navbar color="warning" />
        <Col className="col-md-8 ml-3">
          <Row className="mt-5">
            <a href="/" style={{textDecoration: "none", color: "black"}}>
              <h4 className="mr-2">Andrew Lubrino</h4>
            </a>
            <FontAwesomeIcon className="mt-1" icon={faLevelUpAlt} />
          </Row>      
          <Row className="d-flex justify-content-center mt-5">
            <Col className="col-md-6">
              <h5>CouncilDataProject Contributor</h5>
              <p>
                I was introduced to CouncilDataProject, an
                open-source civic data project, and Jackson 
                Maxfield, the project's founder / lead developer,
                at a Hack-a-Thon hosted by Democracy Labs. I've
                contributed two front-end components since the
                Hack-a-Thon:
              </p>
              <Nav>
                <NavLink href="https://github.com/CouncilDataProject/cdp-frontend/tree/main/src/components/Layout/Footer">
                  Footer Component
                </NavLink>
                <NavLink href="https://github.com/CouncilDataProject/cdp-frontend/tree/main/src/components/Details/MinutesItemsList">
                  Minutes Items List Component
                </NavLink>
              </Nav>
              <p>
                I've had a lot of fun working on this project
                and I plan to continue contributing as time 
                permits.
              </p>
            </Col>
            <Col className="col-md-6">
              <img src=""/>
            </Col>
          </Row>
        </Col>
      </div>
    )
  }