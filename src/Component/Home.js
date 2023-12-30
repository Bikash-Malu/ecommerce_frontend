import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer';
import Confettie from './Confettie';
// import confetti from './confetti';
const Home = () => {
   
    const[product,setproduct]=useState([]);

    useEffect(()=>{
        getproduct();
    },[])
    const getproduct=(e)=>{
        // e.preventDefault();
        axios.get("http://localhost:1200/products").then((res)=>{
            setproduct(res.data);
            // console.log(res.data[0])
        }).catch((err)=>{
            console.log(err);
        }) 
    }

    
  return (
    <div class="container mt-5">
        <Confettie/>
    <div class="jumbotron">
        <h1 class="display-4">Welcome to Your Online Store!</h1>
        <p class="lead">Explore our wide range of products and find the best deals.</p>
        <hr class="my-4"/>
        <p>Check out our featured products below:</p>
        {/* <!-- Featured Products Section --> */}
        <div class="row">
            {
                product.map((data,i)=>(
                    <div class="col-lg-4 col-md-6 col-12">
                    <div class="card shadow-sm">
                        {/* <img src="https://via.placeholder.com/150" class="card-img-top" alt="Product Image"> */}
                        <div class="card-body">
                            <h5 class="card-title">{i+1}){data.name}</h5>
                            <h6 class="card-title">id:{data._id}</h6>
                            <p class="card-text">{`category:-${data.category}`}</p>
                            <p class="card-text">{`company:-${data.company}`}</p>
                            <a href="#" class="btn btn-primary">₹{data.price}</a>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                ))
           
}
            
        </div>
        </div>
        </div>
  )
}

export default Home
