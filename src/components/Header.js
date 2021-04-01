import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Header(){
 
  return(

    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Google Book Search</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Search">Search</Nav.Link>
      <Nav.Link href="/Saved">Saved</Nav.Link>
     </Nav>
    </Navbar>
    
    )
}

export default Header