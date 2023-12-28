import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiox from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
  const navigate=useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })
  useEffect(() => {
    // console.log(data)
  }, [data]);
  const userhandle = (event, name) => {
    setdata({ ...data, [name]: event.target.value });
  };
  const usersubmit = (e) => {
    e.preventDefault();
    const name = data.name;
    const email = data.email;
    const password = data.password;
    if(!name||!email||!password){
      toast('fill all the feild', {
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
    axiox
      .post("http://localhost:1200/", { name, email, password })
      .then((res) => {
        setdata({
          name:"",
          email:"",
          password:""

        })
        toast('Register Succesfully', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
        console.log(res);
        navigate('/login')
        setdata("")

      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div className="container">
      <div className="signup-container">
        <div className="card">
<div className="card-header">
<h2 className="text-center mb-4">Sign Up</h2>
</div>
<div className="card-body">



       
        <form onSubmit={usersubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              value={data.name}
              className="form-control"
              id="username"
              placeholder="Enter your username"
              name="name"
              onChange={(e) => {
                userhandle(e, "name");
              }}
             
            />
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              value={data.email}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => {
                userhandle(e, "email");
              }}
             
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              value={data.password}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => {
                userhandle(e, "password");
              }}
             
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
        </p>
        <div className="card-footer">

        Already've an account?<Link to="/login">Login here</Link>
       
        </div>
        </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
