import React from 'react'

export default function Admin() {
  return (
    <>
    <div className="admin">
    <div className="admin_detail">
      <h1>
      Admin Details
      </h1>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email id"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Forget Password</label>
  {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password"/> */}
</div>
    </div>
    <div className="admin_authentication">
      <div className=''>

      <h1>
      2-factor authentication 
      </h1>
      <div class="form-check form-switch">
  {/* <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
    <div class="tg-list-item">
    <input class="tgl tgl-flat" id="cb4" type="checkbox"/>
    <label class="tgl-btn" for="cb4"></label>
  </div>
</div>
      </div>
      <p>
      We’ll ask you for a login code in addition to your password when
you log in on a device we don’t recognise.
      </p>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email id"/>
</div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">enter number</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
      </div>

      <div class="mb-3">
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter OTP"/>
      </div>
      <div className=''>
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-primary">Cancel</button>
      </div>

    </div>
    </div>
    
    </>
  )
}
