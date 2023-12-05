import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./BaseUrl";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogin =()=>{
    const item={
      username:username,
      password:password
    }
    axios.post(baseUrl + "login",item).then((res)=>{
      if(res.data.type==="admin"){
       navigate("/dashboard")
      }else if(res.data.type==="party"){
        alert("party")
      }else{
        alert(res.data.message)
      }
    })
    
    
  }

  return (
    <>
      <div className="backgroundbg d-flex justify-content-center align-items-center">
        <div className="login glass rounded">
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
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control glass border-black"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email or username"
                  autofocus
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
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="form-control glass passwordinp border-black"
                    name="password"
                    placeholder="Password"
                    aria-describedby="password"
                  />

                  <span  className="input-group-text cursor-pointer glass border-black">
                    <i className="bx bx-show" />
                  </span>
                </div>
              </div>
              <div className="mb-3"></div>
              <button
                onClick={() =>navigate("/dashboard")}
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
