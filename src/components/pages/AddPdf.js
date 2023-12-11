import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./BaseUrl";
import storage from "./Firebase";


function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    getSubject();
  }, []);
  useEffect(() => {
    const logincheck = localStorage.getItem("logincheck");
    if (logincheck !== "check") {
      navigate("/");
    }
  }, []);
  const [postData, setPostData] = useState({ subject: "", topic: "", pdf: "" });
  const [pdfValidator, setPdfValidator] = useState(false);
  const [subjectValidator, setSubjectValidator] = useState(false);

  const postPdf = () => {
    if (
      (postData.subject !== "") &
      (postData.topic !== "") &
      (postData.pdf !== "")
    ) {
      let formdata = new FormData();
      formdata.append("pdf", postData?.pdf);
      formdata.append("subject", postData?.subject);
      formdata.append("topic", postData?.topic);

      axios
        .post("http://54.252.242.121:5000/pdf/save-topic", formdata)
        .then(() => {
          setPdfValidator(false);
          navigate("/AllPdf")
        });
    } else {
      setPdfValidator(true);
    }
  };

  const [subject, setSubject] = useState("");
  const [progress1, setProgress1] = useState("");
  const [subjectList, setSubjectList] = useState([]);

  const postSubject = () => {
    if (subject!==""){
    const item = {
      subject: subject,
    };
    axios
      .post("http://54.252.242.121:5000/pdf/upload-pdf", item)
      .then(() => {
        setSubject("")
        alert("Subject Add Successfully")
        getSubject()});
  }else {
    setSubjectValidator(true)
  }};

  const getSubject = () => {
    axios
      .get("http://54.252.242.121:5000/pdf/view-pdf")
      .then((res) => setSubjectList(res.data.PDF));
  };

  const uploadImage = (x) => {
    if (x !== "") {
      const uploadTask = storage.ref(`images/${x.name}`).put(x);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress1(
            Math.ceil((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(x.name)
            .getDownloadURL()
            .then((url) => {
              setProgress1(0);

              setPostData({ ...postData, pdf: url });
            });
        }
      );
    } else {
      alert("No File selected");
    }
  };

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            {/* =====================Subject Div=================== */}

            <div className="container mt-4">
              <div className="card">
                <div className="conatiner-fluid">
                  <div className="row g-3 py-3 px-2">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                          <span>Subject</span>
                        </div>
                        <div className="col-8">
                          <input
                            style={{
                              border:
                                (subject === "") & (subjectValidator === true)
                                  ? "1px solid red"
                                  : "1px solid lightgrey",
                            }}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid d-flex justify-content-center p-4">
                  <button
                    style={{
                      backgroundColor: "rgb(221 186 163)",
                      color: "white",
                    }}
                    onClick={() => postSubject()}
                    className="btn btn"
                  >
                    Submit
                  </button>
                  &nbsp;
                  <button
                    onClick={() => navigate("/AllPdf")}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* =====================PDF Div=================== */}

            <div className="container mt-4">
              <div className="card">
                <div className="conatiner-fluid">
                  <div className="row g-3 py-3 px-2">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                          <span>Subject</span>
                        </div>
                        <div className="col-8">
                          <select
                            style={{
                              border:
                                (postData.subject === "") &
                                (pdfValidator === true)
                                  ? "1px solid red"
                                  : "1px solid lightgrey",
                            }}
                            onChange={(e) =>
                              setPostData({
                                ...postData,
                                subject: e.target.value,
                              })
                            }
                            className="form-select"
                          >
                            <option value="" selected disabled>
                              --Select--
                            </option>
                            {subjectList.map((i) => (
                              <option value={i._id}>{i.subject}</option>
                            ))}
                          </select>
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
                            style={{
                              border:
                                (postData.topic === "") &
                                (pdfValidator === true)
                                  ? "1px solid red"
                                  : "1px solid lightgrey",
                            }}
                            value={postData.topic}
                            onChange={(e) =>
                              setPostData({
                                ...postData,
                                topic: e.target.value,
                              })
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
                            style={{
                              border:
                                (postData.pdf === "") & (pdfValidator === true)
                                  ? "1px solid red"
                                  : "1px solid lightgrey",
                            }}
                            type="file"
                            onChange={(e) =>uploadImage(e.target.files[0])}
                            className="form-control"
                          />
                          <div
                            style={{
                              height: 3,
                              width: "100%",
                              backgroundColor: "lightgrey",
                            }}
                          >
                            <div
                              style={{
                                height: 3,
                                width: `${progress1}%`,
                                backgroundColor: "green",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid d-flex justify-content-center p-4">
                  <button
                    style={{
                      backgroundColor: "rgb(221 186 163)",
                      color: "white",
                    }}
                    onClick={() => postPdf()}
                    className="btn btn"
                  >
                    Submit
                  </button>
                  &nbsp;
                  <button
                    onClick={() => navigate("/AllPdf")}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
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
