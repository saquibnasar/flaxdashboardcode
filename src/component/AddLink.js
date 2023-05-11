import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AddLink(props) {

  return (
  <div className='addlink'>
  <div className='addlink-back' onClick={props.sendData}>
  <FontAwesomeIcon icon={faArrowLeft} />
  Back
  </div>

  <div className='d-flex justify-content-between'>
   <div className='addlink_content'>
    <div className='addlink_content-top'>
      <div className='addlink_content-top-icon'>
        <FontAwesomeIcon icon={faPhone} /> 
      </div>
        <h1>
       Add {props.data.headerTitle} to card
    </h1>
    </div>
      <div className='form'>
           <form action='' >
              <div className='mt-5 email_input'>
                <div id='emailHelp' className='form-text'>
              {props.data.title}
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                  {props.data.titleInput}
                  </label>
                </div>
              </div>
              <div className='mt-4 email_input'>
                <div id='emailHelp' className='form-text'>
                Link title
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                  {props.data.linkTitleInput}
                  </label>
                </div>
              </div>
            <div className='submit d-flex'>
              <button
                type='submit'
                className='btn btn-primary'
                >
                Cancel
              </button>
              <button
                type='submit'
                className='btn btn-primary'
              >
                Add link
              </button>
                </div>
            </form>
       </div>
    </div>
   <div className='addlink_phone'>
    <div className='addlink_phone-frame'>
            <h3>Name</h3>
            <h4>Designation</h4>
            <h5>Company Name</h5>
            <div className='signup_phone-box'>+91 8010101010</div>
            {/* <div className='signup_phone-boxs'>
           
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
            </div> */}
      </div>
    </div>
  </div>
  </div>
  )
}
