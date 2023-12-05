import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mssquarelogo from "./mssquarelogo.png"
import flourlogo from "./flourlogo.png"

function Sidebar() {
  const navigate=useNavigate()
  const [showDiv, setShowDiv]=useState("Master","Purchase")
  const [showSide, setShowSide]=useState(false)
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
                  className="fa fa-long-arrow-left"
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
            <img
              style={{ width: 150, height: "auto", marginLeft: 10 }}
              src={mssquarelogo}
            />
          </div>
          <span
            onClick={() => setShowSide(false)}
            style={{
              fontSize: 20,
              fontWeight: "bold",
              cursor: "pointer",
              position: "absolute",
              right: 15,
              top: 10,
            }}
          >
            X
          </span>

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
                    className="fa fa-long-arrow-left"
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
              
                <li
                  className="menu-header small text-uppercase"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems:"center",
                  
                   
                  }}
                  onClick={() =>
                    setShowDiv(showDiv === "Purchase" ? "" : "Purchase")
                  }
                >
                  <span className="menu-header-text">HRM</span>
                  {showDiv !== "Purchase" ? (
                    <i class="fa fa-caret-right"></i>
                  ) : (
                    <i class="fa fa-caret-down"></i>
                  )}
                </li><br />

              <div
                style={{
                  height:
                    showDiv === "Purchase"?
                        "17rem"
                      : "0rem",
                  transition: "0.6s",
                  overflow: "hidden",
                }}
              >
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/EmployeeTable")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Add Employees</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/Attendance")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Attendance</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/EmpInOut")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>In-Out</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/AttendanceRecord")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Attendance Record</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/Document")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Monthly Report</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/AttDelete")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Attendance Delete</div>
                    </a>
                  </li><br />
                
              </div>

              <li
                  className="menu-header small text-uppercase"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems:"center",
            
                   
                  }}
                  onClick={() =>
                    setShowDiv(showDiv === "Student" ? "" : "Student")
                  }
                >
                  <span className="menu-header-text">Student</span>
                  {showDiv !== "Purchase" ? (
                    <i class="fa fa-caret-right"></i>
                  ) : (
                    <i class="fa fa-caret-down"></i>
                  )}
                </li><br />

              <div
                style={{
                  height:
                    showDiv === "Student"?
                        "17rem"
                      : "0rem",
                  transition: "0.6s",
                  overflow: "hidden",
                }}
              >
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/Syllabus")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Category</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/Topic")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Topic</div>
                    </a>
                  </li><br />
                  <li className="menu-item">
                    <a
                      href
                      onClick={() => navigate("/Student")}
                      className="menu-link"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="menu-icon tf-icons bx bx-check-shield" />
                      <div>Student</div>
                    </a>
                  </li><br />
             
                
              </div>
              
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
