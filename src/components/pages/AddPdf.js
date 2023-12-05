import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./BaseUrl";
import storage from "./Firebase";

import { hasPermission } from "./HashPermission";

function Home() {
  useEffect(() => {}, []);

  const navigate = useNavigate();
  const [postData, setPostData] = useState({});

  useEffect(()=>console.log(postData),[postData])


  const postPdf = () => {
    let formdata=new FormData()
    formdata.append("pdf",postData?.pdf)
    formdata.append("subject",postData?.subject)
    formdata.append("topic",postData?.topic)
    
    axios.post("http://54.252.242.121:5000/pdf/upload-pdf",formdata).then((res) => {
      console.log(res)
      // navigate("/AllPdf");
    }).catch((err)=>{
      console.log(err)
    })
  };

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <div className="container mt-4">
              <div className="card">
                <div className="conatiner-fluid">
                  <div className="row g-3 py-3 px-2">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                          <span>Subject:</span>
                        </div>
                        <div className="col-8">
                          <input
                          value={postData.subject}
                            onChange={(e) =>
                              setPostData({ ...postData, subject: e.target.value })
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                          <span>Topic:</span>
                        </div>
                        <div className="col-8">
                          <input
                          value={postData.topic}
                            onChange={(e) =>
                              setPostData({ ...postData, topic: e.target.value })
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                          <span>Pdf File:</span>
                        </div>
                        <div className="col-8">
                          <input
                          type="file"
                      
                            onChange={(e) =>
                              setPostData({ ...postData, pdf: e.target.files[0] })
                            
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
               
                  </div>
                </div>
                <div className="container-fluid d-flex justify-content-center p-4">
                <button
                  style={{backgroundColor:"rgb(221 186 163)", color:"white"}}
                    onClick={() => postPdf()}
                    className="btn btn"
                  >
                    Submit
                  </button>
                  &nbsp;
                  <button onClick={()=>navigate("/AllPdf")} className="btn btn-secondary">Cancel</button>
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
