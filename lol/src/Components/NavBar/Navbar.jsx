import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import "./Navbar.css"
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="contenido">
        <Navbar.Brand href="#home" className='texto'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className='texto'>Home</Nav.Link>
          <Nav.Link href="#link" className='texto'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;