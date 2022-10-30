import React from "react";
// import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css";
import Crackerlogin from './Crackerlogin'

function Login() {
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <Crackerlogin/>
      <div style={{position:'absolute',display:"flex",top:'0',left:'7%'  }} className="container-fluid">
        <div style={{height:'450px'}} className="card card0 border-0">
          <div className="row d-flex">
            <div style={{height:'430px',width:'400px'}} className="container col-lg-6 mt-1">
              {/* <div className="card2 card border-0 px-4 py-2 "> */}
                <div className="row mb-2 px-3">
                  <h2 className=" mt-3 mb-2 mr-4">
                    Student-Login
                  </h2>
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="row px-3 mb-4">
                  <a href="#" className="ml-auto mt-3 text-sm">
                    Forgot Password?
                  </a>
                </div>
                <div className="row mb-3 px-3">
                  <button
                    type="submit"
                    onClick={()=>{
                      navigate("./Complaint")
                    }}
                    className="container btn btn-blue text-center"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>
    </div>
  );
}

export default Login;
