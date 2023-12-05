import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();
  const [pdfList, setPdfList] = useState([]);


  const getPdf = () => {
    axios.get("http://54.252.242.121:5000/pdf/view-pdf").then((res)=>{
    setPdfList(res?.data?.PDF)
    })
  };
  useEffect(() => {
    getPdf();
  }, []);


  const dltPDF=(x)=>{
    axios.delete("http://54.252.242.121:5000/pdf/delete-pdf/"+x).then(()=>{ getPdf();})
  }

  const edit=(x)=>{
    axios.put("http://54.252.242.121:5000/pdf/update-pdf-upload/"+x,).then(()=>{ getPdf();})
  }


  return (
    <div>
 

      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <div className="container-fluid flex-grow-1 container-p-y">
              <div className="card py-4 vcenter">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-start">
                 
                      <button
                        style={{ backgroundColor: "rgb(165 206 210)", color: "white",fontWeight:"bold" }}
                        onClick={() => navigate("/AddPdf")}
                        className="btn btn"
                      >
                        Add PDF
                      </button>
                    </div>
                    <br />
                  </div>
                  <br />

                  <div className="table-responsive text-nowrap">
                    <table class="table table-striped">
                      <thead>
                        <tr
                          style={{ backgroundColor: "rgb(221 186 163)", color: "white" }}
                          className="table"
                        >
                          <th style={{ color: "white",fontWeight:"bold" }} scope="col">
                            Sr No.
                          </th>
                          <th style={{ color: "white",fontWeight:"bold" }} scope="col">
                            Subject
                          </th>
                          <th style={{ color: "white",fontWeight:"bold" }} scope="col">
                            Topic
                          </th>
                          <th style={{ color: "white",fontWeight:"bold" }} scope="col">
                            PDF
                          </th>
                        
                          <th style={{ color: "white",fontWeight:"bold" }} scope="col">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                    {pdfList.map((i,n)=>
                          <tr>
                            <td>{n + 1}</td>
                            <td>{i.subject}</td>
                            <td>{i.topic}</td>
                            <td>{i.pdf}</td>
                            <td>
                           { <button className="btn btn-secondary text-white">
                          <a style={{color:"white"}}  target="_blank" href={`http://54.252.242.121:5000/pdf/${i.pdf}`} download><i className="fa fa-download"></i></a>
                          </button>}  &nbsp;
                          
                              <button onClick={()=>{localStorage.setItem("pdfData", JSON.stringify(i)); navigate("/EditPdf")}} style={{ backgroundColor: "rgb(165 206 210)"}} className="btn btn">
                              <i className="fa fa-edit"></i></button>
                              &nbsp;
                              <button onClick={()=>dltPDF(i._id)} style={{ backgroundColor: "rgb(221 186 163)"}} className="btn btn">
                              <i className="fa fa-trash"></i></button>
                              </td>
                      
                          </tr>
                     )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
