import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'


function Navigationbar() {
    return (
        <Navbar bg="light" expand="lg"  className='fixed-top'>
          <Container>
            <Navbar.Brand href="#home">WAHOME &#9969; </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <LinkContainer to="">
                <Nav.Link>Home</Nav.Link>
</LinkContainer>


                <LinkContainer to="/auth">
    <Nav.Link>Log In</Nav.Link>
</LinkContainer>



<LinkContainer to="/signup">
    <Nav.Link>Sign Up </Nav.Link>
</LinkContainer>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigationbar;