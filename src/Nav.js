import React from 'react'
import './Nav.css'
import{Link} from 'react-router-dom'
import Footer from './Footer';
const Nav = () => {
    const auth=localStorage.getItem('user');
  return (
    <div className='nav1'>
      {auth?
      <ul>
        <li><Link to='/product' style={{textDecoration:'none',color:'black'}}>Product</Link></li>
        <li><Link to='/add' style={{textDecoration:'none',color:'black'}}>Add Product</Link></li>
        {/* <li><Link to='/update' style={{textDecoration:'none',color:'black'}}>Update Product</Link></li> */}
        <li><Link to='/profile'style={{textDecoration:'none',color:'black'}}>Profile</Link></li>
        <li><Link to='/logout' style={{textDecoration:'none',color:'black'}}>Logout({JSON.parse(auth).name})</Link></li>
        </ul>:
        <>
          <ul>
          <li><Link to='/'style={{textDecoration:'none',color:'black'}}>Home</Link></li>
          <li><Link to='/about'style={{textDecoration:'none',color:'black'}}>About</Link></li>
          <li><Link to='/service'style={{textDecoration:'none',color:'black'}}>Service</Link></li>
          <li><Link to='/signup'style={{textDecoration:'none',color:'black'}}>Signup</Link></li>
          <li><Link to='/login'style={{textDecoration:'none',color:'black'}}>Login</Link></li>
          </ul>
      <Footer/>
      </>

        }

    </div>
  )
}

export default Nav
