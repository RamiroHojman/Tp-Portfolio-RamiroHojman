import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import "./Navbar.css"
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="contenido">
        <Navbar.Brand href="/" className='texto'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/Favoritos" className='texto'>Favoritos</Nav.Link>
          <Nav.Link href="/MisCreaciones" className='texto'>Mis Creaciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;