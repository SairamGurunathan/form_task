import React, { useState } from 'react';
import './Billing.css';
import moment from 'moment/moment';


const Billing = () => {
   const [userData, setUserData] = useState([]);
   const [error, setError] = useState({});
   // const [isValidEmail, setIsValidEmail] = useState(true);
   // const date = moment().format("MMMM DD YYYY");
   // const time = moment().format("HH mm ss");
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

   const [inputData, setInputData] = useState({
      email : '',
      fName : '',
      lName : '',
      password : '',
      data:'',
      time : ''
   })
//    const validateEmail = (email)=>{
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.inputData(email);
//   };
   const handleChange = (e) => {
      const {
         name,value
      } = e.target;
      setInputData({...inputData, [name] : value,time:moment().format("HH mm ss"),date:moment().format("MMMM DD YYYY")});
      setError({...error,[name]:""})
   }
// console.log(userData,"userdata",inputData,"input");
   const submitData = () => {
      // const tableData = {...inputData}
   
      const newErrors = {};

      if (!inputData.fName.trim()) {
        newErrors.fName = "Name is required";
      }
      if (!inputData.lName.trim()) {
         newErrors.lName = "Name is required";
       }
  
      if (!inputData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(inputData.email)) {
        newErrors.email = "Invalid email format";
      }
  
      if (!inputData.password.trim()) {
        newErrors.password = "Password is required";
      } else if (!passwordRegex.test(inputData.password)) {
        newErrors.password =
          "Password must have at least 8 characters, one lowercase, one uppercase and one digit";
      }
  
      setError(newErrors);
      if(Object.keys(newErrors).length>0){
         return;
      }
   if(inputData.email && inputData.fName && inputData.lName && inputData.password){
      setUserData([...userData,inputData]);
   }
   
      setInputData({ 
      email : '',
      fName : '',
      lName : '',
      password : '',});
   }
   //  const [email, setEmail] = useState();
   //  const [fName, setFName] = useState();
   //  const [lName, setLName] = useState();
   //  const [password, setPassword] = useState();
   //  console.log(email);
   //  console.log(fName);
   //  console.log(lName);
   //  console.log(password);
   // const handleChange = (e) => {
   //    setEmail(e.target.value);
   //    setFName(e.target.value);
   //    setLName(e.target.value);
   //    setPassword(e.target.value)
   // }
   // console.log(inputData);
   // console.log(userData);

  

  return (
    <>
   <header className="mb-3 p-4 text-center bg-dark text-white"> </header>

   <div className="container-fluid">
      <div className="row">
         <div className="col-sm-6">
            <div className="col">
               <div className="card rounded-4 p-1 p-lg-3 border-0">
                  <div className="card-body">
                     <h5 className="card-title fw-bold"><span className="span-1 pe-2">1</span> Account details</h5>
                     <p className="sign-in card-text text-end fw-bold mb-0">
                        Already have an account?<a href="#" className="text-decoration-none"> Sign in here</a>
                     </p>
                     <form>
                     <div className="row">
                        <div className="col-sm-6 pe-md-3">
                           <label className="form-label fw-bold">Email address *</label>
                           <input
                              type="email"
                              className="form-control fw-bold rounded-4 border-0 w-100 ps-3 add"
                              placeholder="Email address"
                              aria-label="Email address"
                              name='email'
                              value={inputData.email}
                              onChange={handleChange}
                              />
                              {error.email && <p style={{color:"red"}}>{error.email}</p>}
                        </div>
                        <div className="col-sm-6 ps-md-3">
                           <label className="form-label password fw-bold">Password *</label>
                                <div className="input-group">
                                    <input type="password"
                                    className="form-control fw-bold pass rounded-start-4 border-0 ps-3" 
                                    placeholder="Password" 
                                    aria-label="Recipient's username" 
                                    aria-describedby="basic-addon2"
                                    name='password'
                                    value={inputData.password}
                                    onChange={handleChange}/>
                                    {/* <span className="input-group-text pass rounded-end-4 border-0" id="basic-addon2">
                                       <a href="#" className="text-decoration-underline fw-bold">Show</a></span> */}
                                       
                                  </div>
                                  {error.password && (<p style={{ color: "red" }}>{error.password}</p>)}
                        </div>
                     </div>
                     <div className="row mt-2">
                        <div className="col-sm-6 pe-md-3">
                           <label className="form-label fw-bold">First name *</label>
                           <input
                              type="text"
                              className="form-control fw-bold rounded-4 border-0 w-100 ps-3 add"
                              placeholder="First name"
                              aria-label="First name"
                              name='fName'
                              value={inputData.fName}
                              onChange={handleChange}
                              />
                               {error.fName && <p style={{color:"red"}}>{error.fName}</p>}
                        </div>
                        <div className="col-sm-6 ps-md-3">
                           <label className="form-label last fw-bold">Last name *</label>
                           <input
                              type="text"
                              className="form-control fw-bold rounded-4 border-0 w-100 ps-3 add"
                              placeholder="Last name"
                              aria-label="Last name"
                              name='lName'
                              value={inputData.lName}
                              onChange={handleChange}
                              />
                              {error.lName && <p style={{color:"red"}}>{error.lName}</p>}
                        </div>
                     </div>
                     </form>
                     <div className="card-body p-0 pt-3">
                        <div className="row">
                           <div className="col-sm-12 col-lg-8">
                              <p className="terms fw-bold pt-2 lh-1 mt-1">
                                 By creating an account, you agree to the
                                 <a href="#" className="text-decoration-none">Terms And Conditions</a> set out by this site, Including our 
                                 <a href="#" className="text-decoration-none">Cookies Use</a>
                              </p>
                           </div>
                           <div className="col-sm-12 col-lg-4 ps-sm-0">
                              <button className="btn fw-bold text-white w-100" onClick={submitData}>Continue</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         

         <div className="col-sm-6 px-md-2">
         <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S No.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
  {userData.length === 0 ? (
    <tr>
      <td colSpan="7" className="text-center">No data available</td>
    </tr>
  ) : (
    userData.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.fName}</td>
        <td>{item.lName}</td>
        <td>{item.email}</td>
        <td>True</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
      </tr>
    ))
  )}
</tbody>

  {/* <tbody >
    {userData.map((item,index)=>(
      
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{item.fName}</td>
      <td>{item.lName}</td>
      <td>{item.email}</td>
      <td>True</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
    </tr>
    ))
    }
    
  </tbody> */}
</table>
         </div>         
      </div>     
   </div>
    </>
  )
}

export default Billing;