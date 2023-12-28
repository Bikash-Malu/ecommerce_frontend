import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Product = () => {
  const[product,setproduct]=useState([]);
useEffect(()=>{
  getProduct();
},[])
const getProduct=(e)=>{
  const auth=localStorage.getItem('user')
  let a=JSON.parse(auth)._id;
  axios.get("http://localhost:1200/products/"+a).then((res)=>{
    setproduct(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}
const del=(id)=>{
// alert(id);
axios.delete("http://localhost:1200/"+id).then((res)=>{
  console.log(res)
  window.location.reload();
  toast('Product delete Sucessfully', {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}).catch((err)=>{
  console.log(err)
})
}
const search=(e)=>{
  let key=e.target.value;
  if(key===""){
    window.location.reload();
  }
  else{
  axios.get("http://localhost:1200/"+key).then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  }
}
  return (
    <div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
        <input type='text' className='form-control mb-2' placeholder='search here for avilable product....' onChange={search}></input>

            <div class="card mb-4 shadow-sm">
                {/* <img src="https://placekitten.com/300/200" class="card-img-top" alt="Product Image"> */}
                {
                 product.length>0?product.map((data,i)=>
                     <div class="card-body">
                    <h5 class="card-title">{`${i+1}) `}{data.name}({data.category})</h5>
                    <p class="card-text">Brand Name:-{data.company}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <Link to={'/update/'+data._id} class="btn btn-sm btn-outline-warning mx-1">Update</Link>
                            <Link type="button" class="btn btn-sm btn-outline-danger p-1"onClick={()=>{del(data._id)}}>Delete</Link>
                        </div>
                        <small class="text-muted">₹{data.price}</small>
                    </div>
                    <hr></hr>
        <ToastContainer/>
                </div>
                  ):
                  <h5>no result found</h5>
}
            </div>        
        </div>
    </div>
</div>
  )
}

export default Product
