import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
           <Navbar fixed="top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Organic Recipes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">

      <NavDropdown title="HOME" id="basic-nav-dropdown">
          <NavDropdown.Item  as={HashLink} to="/home#home"> Main Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Personal Blog</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Organic Recipes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Food Blog Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cake Recipes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Recipes Home</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="RECIPES" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"> Tender and crisp chicken legs with tomatoes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Spaghetti bolognese with mushrooms</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Creamy Mediterranean chicken pasta</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Garlic butter mushroom pasta</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Steak salad with goat cheese and arugula</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Falafels and fried eggs with salad</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">All recipes</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="SHOP" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"> Product single</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Product list</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">My account</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cart</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={HashLink} to="/about">ABOUT</Nav.Link>
          <Nav.Link as={HashLink} to="/contact">CONTACT</Nav.Link>
          
         
      </Nav>
      {user?.email ?
     <Button onClick={logOut} variant="light">Logout</Button>:
      <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

    //  <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
    }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      
      </Navbar.Text>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;