import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

function Header(){
 
  return(

    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Google Books</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Search">Search</Nav.Link>
      <Nav.Link href="/Saved">Saved</Nav.Link>
     </Nav>
    </Navbar>

    )
}

export default Header;