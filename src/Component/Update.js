import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const navigate=useNavigate();
  const[name,setname]=useState('');
  const[price,setprice]=useState('');
  const[category,setcategory]=useState('');
  const[company,setcompany]=useState('');
  const param=useParams();
  useEffect(()=>{
    // alert(param.id)
    get();
  },[])
  const get=()=>{
  axios.get("http://localhost:1200/prod/"+param.id).then((res)=>{
    setname(res.data[0].name)
    setprice(res.data[0].price)
    setcategory(res.data[0].category)
    setcompany(res.data[0].company)
  }).catch((err)=>{
    console.log(err)
  })
}
const updateform=(e)=>{
e.preventDefault();
let _id=param.id;
console.log("this"+_id)
axios.put("http://localhost:1200/update/"+_id,{name,price,category,company}).then((res)=>{
  console.log(res);
  navigate('/product')

}).catch((err)=>{
  console.log(err)
})
  }
  return (
    <div className='signup-container'style={{border:'1px solid white',borderRadius:'5%',padding:'-10px'}}>
    <div class="container mt-5">
    <div class="card-header text-center">
              <h2>Update Product</h2>
            </div>
  <form onSubmit={updateform}>
      <div class="form-group">
          <label for="productName">Product Name</label>
          <input type="text" class="form-control" value={name} id="productName" placeholder="Enter product name"onChange={(e)=>{setname(e.target.value)}} required/>
      </div>
      <div class="form-group">
          <label for="productPrice">Price</label>
          <input type="text" class="form-control" value={price} id="productPrice"onChange={(e)=>{setprice(e.target.value)}} placeholder="Enter price" required/>
      </div>
      <div class="form-group">
          <label for="productCategory">Category</label>
          <input type="text" class="form-control" value={category} id="productCategory"onChange={(e)=>{setcategory(e.target.value)}} placeholder="Enter category" required/>
      </div>
      <div class="form-group">
          <label for="companyName">Company Name</label>
          <input type="text" class="form-control" value={company} id="companyName"onChange={(e)=>{setcompany(e.target.value)}} placeholder="Enter company name" required/>
      </div>
      <button type="submit" class="btn btn-primary m-2">Submit</button>
  </form>
</div>
  </div>
  )
}

export default Update
