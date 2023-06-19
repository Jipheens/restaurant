import './App.css';
import Navigationbar from './Navbar';
import CarouselFadeExample from './Carous';
import Auth from './auth';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './main';
import Signup from './signup';
function App() {
  return (
      


      <BrowserRouter>
        <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/auth' element={<Auth title="LogIn"/>}/>

        </Routes>
        <Signup/>
      </BrowserRouter>
  );
}

export default App;
