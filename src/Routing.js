import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';
import Jwellery from './Jwellery';
import Woman from './Woman';
import Men from './Men';

function Routing() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mobile">Mobile</Nav.Link>
            <Nav.Link href="/laptop">Laptop</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jwellery">Jewelery</Nav.Link>
            <Nav.Link href="/man">Man Cloths</Nav.Link>
            <Nav.Link href="/woman">Woman Cloths</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link > <button>Login</button></Nav.Link>
            <Nav.Link > <button>Register</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     <Routes>
      {/* <Route path='/' element={<Home></Home>}></Route> */}
      <Route path='/' Component={Home}></Route>
      <Route path='/electronics' Component={Electronics}></Route>
      <Route path='/jwellery' Component={Jwellery}></Route>
      <Route path='/man' Component={Men}></Route>
      <Route path='/woman' Component={Woman}></Route>
     </Routes>
    </>
  );
}

export default Routing;