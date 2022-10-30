// import React from "react";
// import './studentReg.css';
// function StudentReg() {
//   return (
//     <div>
//       <section className="vh-100 gradient-custom">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center h-100">
//             <div className="col-12 col-lg-9 col-xl-7">
//               <div
//                 className="card shadow-2-strong card-registration"
//                 style={{borderRadius: '15px'}}
//               >
//                 <div className="card-body p-4 p-md-5">
//                   <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
//                   <form>
//                     <div className="row">
//                       <div className="col-md-6 mb-4">
//                         <div className="form-outline">
//                           <input
//                             type="text"
//                             id="firstName"
//                             className="form-control form-control-lg"
//                           />
//                           <label className="form-label" htmlFor="firstName">
//                             First Name
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-md-6 mb-4">
//                         <div className="form-outline">
//                           <input
//                             type="text"
//                             id="lastName"
//                             className="form-control form-control-lg"
//                           />
//                           <label className="form-label" htmlFor="lastName">
//                             Last Name
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6 mb-4 d-flex align-items-center">
//                         <div className="form-outline datepicker w-100">
//                           {/* <input
//                             type="text"
//                             className="form-control form-control-lg"
//                             id="birthdayDate"
//                           />
//                           <label htmlFor="birthdayDate" className="form-label">
//                             Birthday
//                           </label> */}
//                         </div>
//                       </div>
//                       <div className="col-md-6 mb-4">
//                         <h6 className="mb-2 pb-1">Gender: </h6>

//                         <div className="form-check form-check-inline">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="inlineRadioOptions"
//                             id="femaleGender"
//                             value="option1"
//                           />
//                           <label className="form-check-label" htmlFor="femaleGender">
//                             Female
//                           </label>
//                         </div>

//                         <div className="form-check form-check-inline">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="inlineRadioOptions"
//                             id="maleGender"
//                             value="option2"
//                           />
//                           <label className="form-check-label" htmlFor="maleGender">
//                             Male
//                           </label>
//                         </div>

//                         <div className="form-check form-check-inline">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="inlineRadioOptions"
//                             id="otherGender"
//                             value="option3"
//                           />
//                           <label className="form-check-label" htmlFor="otherGender">
//                             Other
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-6 mb-4 pb-2">
//                         <div className="form-outline">
//                           <input
//                             type="email"
//                             id="emailAddress"
//                             className="form-control form-control-lg"
//                           />
//                           <label className="form-label" htmlFor="emailAddress">
//                             Email
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-md-6 mb-4 pb-2">
//                         <div className="form-outline">
//                           <input
//                             type="tel"
//                             id="phoneNumber"
//                             className="form-control form-control-lg"
//                           />
//                           <label className="form-label" htmlFor="phoneNumber">
//                             Phone Number
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-12">
//                         {/* <select className="select form-control-lg">
//                           <option value="1" disabled>
//                             Choose option
//                           </option>
//                           <option value="2">Subject 1</option>
//                           <option value="3">Subject 2</option>
//                           <option value="4">Subject 3</option>
//                         </select> */}
//                         {/* <label className="form-label select-label">
//                           Choose option
//                         </label> */}
//                       </div>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <input
//                         className="btn btn-primary btn-lg"
//                         type="submit"
//                         value="Submit"
//                       />
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default StudentReg;



import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='form2' type='email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='form3' type='password' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput label='Repeat your password' id='form4' type='password' />
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;







// < !doctype html >
//   <html lang="en">
//     <head>
//       <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//           <title>Bootstrap demo</title>
//           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//           </head>
//           <body>
//           <div>
//       <div className="container-fluid">
//         <div style={{height:'700px'}} className="card card0 border-0">
//           <div className="row d-flex">
//             <div style={{border:'2px solid black',height:'430px',width:'400px'}} className="container col-lg-6 mt-5 ">
//               <div className="card2 card border-0 px-4 py-2">
//                 <div className="row mb-2 px-3">
//                   <h2 className=" mt-3 mb-2 mr-4">
//                     Student-Login
//                   </h2>
//                 </div>
//                 <div className="row px-3">
//                   <label className="mb-1">
//                     <h6 className="mb-0 text-sm">Email Address</h6>
//                   </label>
//                   <input
//                     className="mb-4"
//                     type="text"
//                     name="email"
//                     placeholder="Enter a valid email address"
//                   />
//                 </div>
//                 <div className="row px-3">
//                   <label className="mb-1">
//                     <h6 className="mb-0 text-sm">Password</h6>
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter password"
//                   />
//                 </div>
//                 <div className="row px-3 mb-4">
//                   <a href="#" className="ml-auto mt-3 text-sm">
//                     Forgot Password?
//                   </a>
//                 </div>
//                 <div className="row mb-3 px-3">
//                   <button
//                     type="submit"
//                     onClick={()=>{
//                       navigate("./Complaint")
//                     }}
//                     className="container btn btn-blue text-center"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
//           </body>
//         </html>