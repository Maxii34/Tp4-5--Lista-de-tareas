import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavForm() {
  return (
    <Navbar expand="lg" className="shadow ">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Tp-Formulario [4/5]
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              href="https://github.com/Maxii34/Tp8-Formulario-Simple"
              target="_blank"
              variant="dark"
              className="shad"
            >
              <i className="bi bi-github"></i> Repocitorio
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavForm;
