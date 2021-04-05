import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = (props) => {
  return (
    <div>
      <Nav vertical>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="https://github.com/andrewlubrino" target="_blank">GitHub</NavLink>
        <NavLink href="/resume" target="_blank">Resume</NavLink>
      </Nav>
    </div>
  );
}

export default Navigation;