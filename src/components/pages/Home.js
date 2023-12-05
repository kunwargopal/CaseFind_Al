import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { baseUrl } from "./BaseUrl";
 function Home () {
  useEffect(()=>{getEmployee()},[])
  const [empList, setEmpList]=useState([])
  const getEmployee= ()=>{
    axios.get(baseUrl+"employees").then((res)=>setEmpList(res.data))
  }

  
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
            <span style={{color:"white", fontSize:23, fontWeight:"bolder", }}>PDF</span>
            <span style={{color:"white", fontSize:30, fontWeight:"bolder", }}>0</span>
          </div>
          </div>
          <div className="dashDiv1" style={{marginLeft:"5%"}}>
            <div className="container" style={{display:"flex", flexDirection:"column"}}>
            <span style={{color:"white", fontSize:23, fontWeight:"bolder", }}>All Users</span>
            <span style={{color:"white", fontSize:30, fontWeight:"bolder", }}>{empList.length}</span>
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
