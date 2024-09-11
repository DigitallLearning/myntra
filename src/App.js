import logo from './logo.svg';
import './App.css';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import Footee from './Footee';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routing></Routing>
     </BrowserRouter>
     <Footee></Footee>
    </div>
  );
}

export default App;
