import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
export default function CreateCard() {
  
  return (
  <>
  <div className='createCard'>
        <div className='signup_form-container'>
          <div
            className="signup_navbar d-flex justify-content-between"
          >
              <Link to="/" className='signup_navbar-back'
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Back</p>
              </Link>
          </div>
          <div className='form'>
            <div className='form_logo'>
              <img className='img-fluid' src='/logofill.svg' alt='' />
              <h2>Create a Flax Card</h2>
            </div>
            <form action=''>
              <div className='mt-5 email_input'>
                <div id='emailHelp' className='form-text'>
                Name*
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                  Name
                  </label>
                </div>
              </div>
              <div className='mt-4 email_input'>
                <div id='emailHelp' className='form-text'>
                Company 
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                  company
                  </label>
                </div>
              </div>
              <div className='mt-4 email_input'>
                <div id='emailHelp' className='form-text'>
                Designation
                </div>
                <div className='did-floating-label-content input-group'>
                  <input
                    className='did-floating-input'
                    type='text'
                    placeholder=' '
                    required
                  />
                  <label className='did-floating-label'>
                  Designation
                  </label>
                </div>
              </div>

              <button
                type='submit'
                className='btn btn-primary'
              >
                Continue
              </button>
            </form>
          </div>
        </div>
        <div className='signup_phone text-center'>
          <p>Live Profile Preview</p>
          <div className='signup_phone-container'>
            <img src='/phone_bannner.svg' className='img-fluid' alt='' />
            <h3>Name</h3>
            <h4>Designation</h4>
            <h4>Company Name</h4>
            <div className='signup_phone-boxs'>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
              <div className='signup_phone-box'></div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
