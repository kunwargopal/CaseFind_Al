import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./BaseUrl";

function Home() {
  const navigate = useNavigate();
  useEffect(()=>{
    const logincheck = localStorage.getItem("logincheck")
    if(logincheck!=="check"){
      navigate("/")
    }
  },[])

  useEffect(() => {
    getAllUsers();
  }, []);

  const [userList, setUserList] = useState([]);
  const getAllUsers = () => {
    axios.get("http://54.252.242.121:5000/user/view-user").then((res) => {
      setUserList(res.data.User);
    });
  };

  const dltUser = (x) => {
    if(window.confirm("Are You sure")){
      axios
        .get("http://54.252.242.121:5000/user/delete-user/" +x).then(()=>{
          getAllUsers()
        })
       ;
    }
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
                        style={{
                          backgroundColor: "rgb(165 206 210)",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        className="btn btn"
                      >
                        All Users
                      </button>
                    </div>
                    <br />
                  </div>
                  <br />

                  <div className="table-responsive text-nowrap">
                    <table class="table table-striped">
                      <thead>
                        <tr
                          style={{
                            backgroundColor: "rgb(221 186 163)",
                            color: "white",
                          }}
                          className="table"
                        >
                          <th
                            style={{ color: "white", fontWeight: "bold" }}
                            scope="col"
                          >
                            Sr No.
                          </th>
                          <th
                            style={{ color: "white", fontWeight: "bold" }}
                            scope="col"
                          >
                            Name
                          </th>
                          <th
                            style={{ color: "white", fontWeight: "bold" }}
                            scope="col"
                          >
                            Email
                          </th>

                          <th
                            style={{ color: "white", fontWeight: "bold" }}
                            scope="col"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList.map((i, n) => (
                          <tr>
                            <td>{n + 1}</td>
                            <td>{i.fullName}</td>
                            <td>{i.email}</td>
                            <td>
                              <button
                                onClick={() => dltUser(i._id)}
                                className="btn btn-danger"
                              >
                                {" "}
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
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
