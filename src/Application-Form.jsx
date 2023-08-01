import React, { useState } from 'react'

const ApplicationForm = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
//  console.log(name,"name");


  return (
    <>
    <h1 className='text-center'>Form</h1>
    <div className="form mx-5 my-3">
    <div className="row">
  <div className="col">
  <label htmlFor="floatingInput">First Name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" onChange={(e)=>{setFirst(e.target.value)}}/>
  </div>
  <div className="col">
  <label htmlFor="floatingInput">Last Name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e)=>{setLast(e.target.value)}}/>
  </div>
</div>
</div>
    <div className="form mx-5 my-3">
    <label htmlFor="floatingInput">User Name</label>
    <input type="text" className="form-control" placeholder="Username" onChange={(e)=>{setName(e.target.value)}}/>
    <label htmlFor="floatingInput">Email</label>
    <input type="email" className="form-control" placeholder="Email id" onChange={(e)=>{setEmail(e.target.value)}}/>
    <label htmlFor="floatingInput">Password</label>
    <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}/>
    </div>
    
    <div className="row mx-5">
      <div className="col">
      <div><h4>Language</h4></div>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={checkChange}/>
  <label className="form-check-label" for="inlineCheckbox1">Tamil</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label className="form-check-label" for="inlineCheckbox2">English</label>
</div>
      </div>
      <div className="col">
        <div><h4>Gender</h4></div>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" for="inlineRadio1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">Female</label>
</div>
      </div>
    </div>

    <div className='mx-5 my-3'>
      <button type='button' className='btn btn-success btn-lg' onClick={() => console.log(name,email)}>Submit</button>
    </div>
    </>
  )
}
export default ApplicationForm;