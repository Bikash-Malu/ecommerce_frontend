import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Addproduct = () => {
  const[name,setname]=useState('');
  const[price,setprice]=useState('');
  const[category,setcategory]=useState('');
  const[company,setcompany]=useState('');
  const[err,seterr]=useState('');
const producthandle=(e)=>{
  e.preventDefault();
  if(!name||!price||!category||!company){
    toast('plz fill all the field', {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  else{
const auth=localStorage.getItem('user')
const userid=JSON.parse(auth)._id;
e.preventDefault();
axios.post("http://localhost:1200/addproduct",{name,price,category,userid,company}).then((res)=>{
  console.log(res)
  setname('');
  setcategory("")
  setprice("")
  setcompany("")
  toast('Product Add Sucessfully', {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}).catch((err)=>{
  console.log(err)
})
}
}
  return (
    <div className='signup-container' style={{border:'.1px solid white',borderRadius:'5%',padding:'-10px'}}>
      <div className="container mt-5">
      <div class="card-header text-center">
              <h2>Add Product</h2>
            </div>
    <form onSubmit={producthandle}>
    <ToastContainer />
        <div className="form-group">
            <label for="productName">Product Name</label>
            <input type="text" className="form-control" id="productName" value={name} placeholder="Enter product name"onChange={(e)=>{setname(e.target.value)}} />
        </div>
        <div className="form-group">
            <label for="productPrice">Price</label>
            <input type="text" className="form-control" id="productPrice" value={price} placeholder="Enter price" onChange={(e)=>{setprice(e.target.value)}} />
        </div>
        <div className="form-group">
            <label for="productCategory">Category</label>
            <input type="text" className="form-control" id="productCategory" value={category} placeholder="Enter category"onChange={(e)=>{setcategory(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label for="companyName">Company Name</label>
            <input type="text" className="form-control" id="companyName" value={company} placeholder="Enter company name"onChange={(e)=>{setcompany(e.target.value)}} />
            <span style={{color:'red',fontWeight:'700'}}>{err}</span>
        </div>
        <button type="submit" className="btn btn-primary m-1">Submit</button>
    </form>
</div>
    </div>
  )
}

export default Addproduct
