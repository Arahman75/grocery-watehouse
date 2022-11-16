import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky='top'>
          <Container className='header'>
            <Navbar.Brand href="/home">Grocery Warehouse</Navbar.Brand>
            <Nav className="me-0">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>
        
      </>
  
    );
};

export default Header;