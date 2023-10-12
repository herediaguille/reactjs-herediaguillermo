import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "../Cartwidget/CartWidget"

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">Black Pan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Hamburguesas</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Combos
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Bebidas</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Promociones
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Nav.Link eventKey={2}>
                    <CartWidget/>
                </Nav.Link>
              </Container>
            </Navbar>
                

        </>
    )
}

export default NavBar