import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "../Cartwidget/CartWidget"
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Link to="/" >
                  <img src='../../public/assets/black-pan.png' alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Link to="/" className='btn btn-outline-dark m-2'>Home</Link>                      
                    <Link to='/category/hamburguesas' className='btn btn-outline-dark m-2'>Hamburguesas</Link>
                    <Link to='/category/combos' className='btn btn-outline-dark m-2'>Combos</Link>
                    <Link to='/category/bebidas' className='btn btn-outline-dark m-2'>Bebidas</Link>
                    <Link to='/category/promociones' className='btn btn-outline-dark m-2'>Promociones</Link>
                      
                  </Nav>
                </Navbar.Collapse>
          
                <Link to='cart'>
                    <CartWidget />
                </Link>
              </Container>
            </Navbar>
                

        </>
    )
}

export default NavBar