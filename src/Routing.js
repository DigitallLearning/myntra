import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes,Link } from 'react-router-dom';
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
          
         
            <Link to="/">Home</Link>
            <Link to="/mobile">Mobile</Link>
            <Link to="/laptop">Laptop</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jwellery">Jewelery</Link>
            <Link to="/man">Man Cloths</Link>
            <Link to="/woman">Woman Cloths</Link>
            <Link to="/help">Help</Link>
            <Link > <button>Login</button></Link>
            <Link > <button>Register</button></Link>
         
        </Container>
      </Navbar>
     <Routes>
     
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