import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Manu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> */}

              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {/* <Nav.Link as={Link} to="/lifecycle">life-cycle</Nav.Link>
              <Nav.Link as={Link} to="/lifecyclefunc">life-cyclefunc</Nav.Link> */}
              <Nav.Link as={Link} to="/usememo">Usememo</Nav.Link>
              <Nav.Link as={Link} to="/usecontext">Usecontext</Nav.Link>
              <Nav.Link as={Link} to="/usecontextEx">UsecontextEx</Nav.Link>
              <Nav.Link as={Link} to="/useref">Useref</Nav.Link>
              <Nav.Link as={Link} to="/localstorege">localstorege</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/about">About</NavDropdown.Item>  */}
                <NavDropdown.Item as={Link} to="about"><br />
                  About
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about/aboutdata"><br />
                  About Data
                </NavDropdown.Item><br />
                <NavDropdown.Item as={Link} to="/about/aboutinfo">About Info</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Manu
