import React from "react";
// import { useEffect } from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div style={{height:'700px'}} className="card card0 border-0">
          <div className="row d-flex">
            {/* <div className="col-lg-6"> */}
            {/* <div className="card1 pb-5">
                <div className="row">
                  <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                </div>
              </div> */}
            {/* </div> */}
            <div style={{border:'2px solid black',height:'430px',width:'400px'}} className="container col-lg-6 mt-5 ">
              <div className="card2 card border-0 px-4 py-2">
                <div className="row mb-2 px-3">
                  <h2 className=" mt-3 mb-2 mr-4">
                    Advisor-Login
                  </h2>
                  {/* <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook"></div>
                  </div>
                  <div className="twitter text-center mr-3">
                    <div className="fa fa-twitter"></div>
                  </div>
                  <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin"></div>
                  </div> */}
                </div>
                {/* <div className="row px-3 mb-4">
                  <div className="line"></div>
                  <small className="or text-center">Or</small>
                  <div className="line"></div>
                </div> */}
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
                  {/* <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                    />
                    <label
                      htmlFor="chk1"
                      className="custom-control-label text-sm"
                    >
                      Remember me
                    </label>
                  </div> */}
                  <a href="#" className="ml-auto mt-3 text-sm">
                    Forgot Password?
                  </a>
                </div>
                <div className="row mb-3 px-3">
                  <button
                    type="submit"
                    className="container btn btn-blue text-center"
                  >
                    Login
                  </button>
                </div>
                <div className="row mb-2 px-3">
                  <small className="font-weight-bold">
                    Don't have an account?{" "}
                    <a className="text-danger ">Register</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-blue py-4">
            <div className="row px-3">
              <small className="ml-4 ml-sm-5 mb-2">
                Copyright &copy; 2019. All rights reserved.
              </small>
              <div className="social-contact ml-4 ml-sm-auto">
                <span className="fa fa-facebook mr-4 text-sm"></span>
                <span className="fa fa-google-plus mr-4 text-sm"></span>
                <span className="fa fa-linkedin mr-4 text-sm"></span>
                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
