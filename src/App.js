import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Addproduct from './Addproduct';
import Footer from './Footer';
import Signup from './Component/Signup';
import Login from './Component/Login';
import PrivateComponet from './Component/PrivateComponet';
import Product from './Component/Product';
import Logout from './Component/Logout';
import Update from './Component/Update';
import Profile from './Component/Profile';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
function App() {
  return (
    <div className="App">
      <div style={{overflow:'hidden',position:'absolute',zIndex:'-1',top:'45px'}}>
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#375a7f', width: '121%', height: 190, transform: 'scaleX(-1)' }}
  >
    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
  </svg>
</div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponet/>}>
        <Route element={<Addproduct/>} path='/add'/>
        <Route element={<Product/>} path='/product'/>
        <Route element={<Logout/>} path='/logout'/>
        <Route element={<Update/>} path='/update/:id'/>
        <Route element={<Profile/>} path='/profile'/>
        </Route>
        <Route element={ <Home/>} path='/'/>
        <Route element={ <About/>} path='/about'/>
        <Route element={ <Service/>} path='/service'/>
        <Route element={ <Signup/>} path='/signup'/>
        <Route element={ <Login/>} path='/login'/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
