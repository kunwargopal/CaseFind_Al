import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mssquarelogo from "./mssquarelogo.png"
import flourlogo from "./flourlogo.png"

function Sidebar() {
  const navigate=useNavigate()
  const [showDiv, setShowDiv]=useState("Master","Purchase")
  const [showSide, setShowSide]=useState(false)

  useEffect(()=>{
    const logincheck = localStorage.getItem("logincheck")
    if(logincheck!=="check"){
      navigate("/")
    }
  },[])
  return (<>
      <aside
        id="layout-menu"
        className=" menu-vertical menu sideclass1"
        style={{ height: "100vh", position: "sticky", top: 0, width: 300,backgroundColor:"rgb(165 206 210)",color:"black" }}
      >
        <div className="pt-2 text-center">
          {/* <img
            alt=""
            style={{ width: "60%", height: "auto" }}
            src={flourlogo}
          /> */}
        </div>

        <div className="menu-inner-shadow"  />
        <ul className="menu-inner  py-1">
            <li onClick={()=>navigate("/dashboard")} className="menu-item ">
              <a href className="menu-link" style={{ cursor: "pointer" }}>
                <i className="menu-icon tf-icons bx bx-home-circle" />
                <div
                  
                >
                  Dashboard
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp;
                <i
                  className="fa fa-long-arrow-left "
                />
              </a>
            </li>
     
          <div
            className="abc"
            style={{ minHeight:"40vh",transition:"0.5s", overflow: "hidden", overflowY: "scroll" , width:"100%"}}
          >
             
        <li className="menu-item">
          <a onClick={() => navigate("/AllPdf")} className="menu-link" style={{ cursor: "pointer" }}>
            <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
            <div>PDF</div>
          </a>
        </li>
       
        <li className="menu-item">
          <a onClick={() => navigate("/AllUsers")} className="menu-link" style={{ cursor: "pointer" }}>
            <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
            <div >All User</div>
          </a>
        </li>
        <li className="menu-item">
          <a onClick={() =>{ localStorage.removeItem("logincheck");navigate("/")}} className="menu-link" style={{ cursor: "pointer" }}>
          <i style={{fontSize:17}} class="menu-icon tf-icons  fa fa-sign-out" aria-hidden="true"></i>
            <div ><b>Logout</b></div>
          </a>
        </li>
      
       
          </div>

   
        </ul>
      </aside>

      {showSide ? (
        <div
          style={{
            position: "fixed",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            oerflow: "hidden",
            overflowY: "auto",
            paddingLeft: 10,
            zIndex: 10,
            border: "1px solid lightgrey",
            borderRadius: 5,
          }}
          className="sideclass"
        >
          <div style={{ padding: 5, marginLeft: -10 }}>
            {" "}
            {/* <img
              style={{ width: 150, height: "auto", marginLeft: 10 }}
              src={mssquarelogo}
            /> */}
          </div>
         

          <div className="menu-inner-shadow" />
          <ul
            className="menu-inner py-1"
            style={{ display: "flex", flexDirection: "column" }}
          >
         
              <li className="menu-item">
                <a href className="menu-link" style={{ cursor: "pointer" }}>
                  <i className="menu-icon tf-icons bx bx-home-circle" />
                  <div
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </div>
                  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  &nbsp; &nbsp; &nbsp;
                  <i
                    className="fa fa-long-arrow-left fa-2x"
                    onClick={() => navigate(-1)}
                  />
                </a>
              </li>
<br/>

            <div
              className="abc"
              style={{
                height: "80vh",
                overflow: "hidden",
                overflowY: "scroll",
               
              }}
            >
              
              <li className="menu-item">
          <a onClick={() => navigate("/AllPdf")} className="menu-link" style={{ cursor: "pointer" }}>
            <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
            <div>PDF</div>
          </a>
        </li><br />
        <li className="menu-item">
          <a onClick={() => navigate("/AllUsers")} className="menu-link" style={{ cursor: "pointer" }}>
            <i class="menu-icon tf-icons bx bx-spreadsheet"></i>
            <div >All User</div>
          </a>
        </li><br />
        <li className="menu-item">
          <a onClick={() =>{ localStorage.removeItem("logincheck");navigate("/")}} className="menu-link" style={{ cursor: "pointer" }}>
          <i style={{fontSize:17}} class="menu-icon tf-icons  fa fa-sign-out" aria-hidden="true"></i>
            <div ><b>Logout</b></div>
          </a>
        </li>
              
            </div>
          </ul>
        </div>
      ) : (
        <div
          style={{
            width: 30,
            height: 30,
            margin: 15,
            marginLeft: 20,
            position: "fixed",
            zIndex: 1100,
            cursor: "pointer",
            padding: 7.5,
          }}
          className="sideclass card"
          onClick={() => setShowSide(true)}
        >
          <i
            className="fa fa-bars"
            style={{ position: "fixed", zIndex: 1100, cursor: "pointer" }}
          />
        </div>
    )}
 
 </>
)}

export default Sidebar;
