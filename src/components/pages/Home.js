import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
import { useNavigate } from "react-router-dom";
 function Home () {
  const navigate=useNavigate()
  useEffect(()=>{getPdf();getAllUsers()},[])

  useEffect(()=>{
    const logincheck = localStorage.getItem("logincheck")
    if(logincheck!=="check"){
      navigate("/")
    }
  },[])
  const [pdfList, setPdfList] = useState([]);
  const getPdf = () => {
    axios.get("http://54.252.242.121:5000/pdf/view-pdf").then((res)=>{
    setPdfList(res?.data?.PDF)
    })
  };

  const [userList, setUserList] = useState([]);
  const getAllUsers = () => {
    axios.get("http://54.252.242.121:5000/user/view-user").then((res) => {
      setUserList(res.data.User);
    });
  };


  
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
    
            <div className="layout-page">

             
              <div
                style={{
                  height: 400,
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",   
                  
                }}
              >
                <div className="container dashhead" style={{ height:50, width:"100%", display:"flex", alignItems:"center",fontWeight:"bold", fontSize:20}}>
                  <span style={{color:"black"}}>Dashboard</span>&nbsp;
                  <span style={{fontSize:25}}>|</span>&nbsp;
                  <i style={{color:"black"}} className="fa fa-home"></i>
                </div>

         <div style={{minHeight:300, width:"100%", display:"flex",flexWrap:"wrap",}}>
          <div className="dashDiv" style={{marginLeft:"5%"}}>
            <div className="container" style={{display:"flex", flexDirection:"column"}}>
            <span style={{color:"white", fontSize:23, fontWeight:"bolder", }}>Total PDF</span>
            <span style={{color:"white", fontSize:30, fontWeight:"bolder", }}>{pdfList.length}</span>
          </div>
          </div>
          <div className="dashDiv1" style={{marginLeft:"5%"}}>
            <div className="container" style={{display:"flex", flexDirection:"column"}}>
            <span style={{color:"white", fontSize:23, fontWeight:"bolder", }}>Total Users</span>
            <span style={{color:"white", fontSize:30, fontWeight:"bolder", }}>{userList.length}</span>
          </div>
          </div>
    
          {/* <div className="dashDiv3">
            <div className="container" style={{display:"flex", flexDirection:"column"}}>
            <span style={{color:"white", fontSize:23, fontWeight:"bolder", }}></span>
            <span style={{color:"white", fontSize:30, fontWeight:"bolder", }}>30,000</span>
          </div>
          </div> */}
        
         </div>
            </div>

        </div>
        </div>
      </div>
    </div>
  )
              }
export default Home;
