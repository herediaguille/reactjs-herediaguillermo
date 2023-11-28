import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "../Cartwidget/CartWidget"
import { Link } from 'react-router-dom';

const categories = [
  {id: '1', name: 'Home', category: ''},
  {id: '2', name: 'Hamburguesas', category: 'hamburguesas'},
  {id: '3', name: 'Combos', category: 'combos'},
  {id: '4', name: 'Bebidas', category: 'bebidas'}
]

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
                    {categories.map(category => 
                                    <Link 
                                      to={`/category/${category.category}`} 
                                      className='btn btn-outline-dark m-2'
                                    >
                                      {category.name}
                                    </Link> 
                                  )
                    }  
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