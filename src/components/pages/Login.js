import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validator, setValidator] = useState(false);

  const isLogin =()=>{
    if(email!==""&password!==""){
    const item={
      email:email,
      password:password
    }
    axios.post("http://54.252.242.121:5000/admin/signin",item).then((res)=>{
      if(res.data.status){
        localStorage.setItem("logincheck","check")
       navigate("/dashboard")
      }
      else{
        alert(res.data.message)
      }
    })}else{
      setValidator(true)
    }
    
    
  }

  return (
    <>
      <div className="backgroundbg d-flex justify-content-center align-items-center">
        <div className="login glass rounded"  style={{backgroundColor:"rgb(165 206 210)"}}>
          <div id="my-node">
            {/* Logo */}
            <div className="app-brand mb-5">
              <a href="index-2.html" className="app-brand-link gap-2"></a>
            </div>
            {/* /Logo */}
            <h4 className="mb-2" style={{color:"black"}}>
              Welcome to <br /> <b>CaseFind.AI Admin!</b>
            </h4>
            <p className="mb-4 text-black">Please log-in to your account</p>
            <div
              className="mb-3"
              action="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/index.html"
              method="POST"
            >
              <div className="mb-3">
                <label style={{color:"black"}} htmlFor="email" className="form-label text-black">
                  Username
                </label>
                <input
                value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control glass"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  autofocus

                  style={{border:email===""&validator===true? "1px solid red":"1px solid black"}}
                />
              </div>
              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label text-black" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="input-group input-group-merge">
                  <input
                  type="password"
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="form-control glass passwordinp"
                    name="password"
                    placeholder="Password"
                    aria-describedby="password"
                    style={{border:password===""&validator===true? "1px solid red":"1px solid black"}}
                  />

                  <span  style={{border:password===""&validator===true? "1px solid red":"1px solid black"}}  className="input-group-text cursor-pointer glass">
                    <i className="bx bx-show" />
                  </span>
                </div>
              </div>
              <div className="mb-3"></div>
              <button
                onClick={() =>isLogin()}
                className="btn btn-outline-light w-100 border-black text-black"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
