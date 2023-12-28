import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const formcontrol = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1200/login", { email, password })
      .then((res) => {
        console.log(res)
      if(res.data==="no user found"){
        toast('email and password not match', {
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
        console.log()
        localStorage.setItem("user",JSON.stringify(res.data))
        navigate('/product')
        window.location.reload();
      }
   
    
    })
      .catch((err) => {
        console.log(err);
        if(err){
          toast(`${err.data}`, {
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
      });
  };
  return (
    <div class="container login-container">
      <div class="row justify-content-center">
        <div class="col-md-5 col-sm-8">
          <div class="card">
            <div class="card-header text-center">
              <h2>Login</h2>
            </div>
            <div class="card-body">
              <form onSubmit={formcontrol}>
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="username"
                    placeholder="Enter your username"
                    name="email"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Login
                </button>
                <p className="text-center mt-3">
                  Don't have an account? <Link to="/signup">Create here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
