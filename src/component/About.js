import React from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { NavLink} from "react-router-dom";

export default function About() {
  return (
   <>
    <div className="d-flex homePage about">
      <SIdebar/>
      <div className="d-flex flex-direction-column w-100">
      <Topbar type="setting" title="" />
    <div className="homePage_container">
    <nav className="sidebar">
    <div className="sidebar-collapse">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/homepage">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83203 8.4585C7.28178 8.4585 8.45703 7.28324 8.45703 5.8335C8.45703 4.38375 7.28178 3.2085 5.83203 3.2085C4.38228 3.2085 3.20703 4.38375 3.20703 5.8335C3.20703 7.28324 4.38228 8.4585 5.83203 8.4585Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.168 8.4585C23.6177 8.4585 24.793 7.28324 24.793 5.8335C24.793 4.38375 23.6177 3.2085 22.168 3.2085C20.7182 3.2085 19.543 4.38375 19.543 5.8335C19.543 7.28324 20.7182 8.4585 22.168 8.4585Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8.4585C15.4497 8.4585 16.625 7.28324 16.625 5.8335C16.625 4.38375 15.4497 3.2085 14 3.2085C12.5503 3.2085 11.375 4.38375 11.375 5.8335C11.375 7.28324 12.5503 8.4585 14 8.4585Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83203 16.625C7.28178 16.625 8.45703 15.4497 8.45703 14C8.45703 12.5503 7.28178 11.375 5.83203 11.375C4.38228 11.375 3.20703 12.5503 3.20703 14C3.20703 15.4497 4.38228 16.625 5.83203 16.625Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.168 16.625C23.6177 16.625 24.793 15.4497 24.793 14C24.793 12.5503 23.6177 11.375 22.168 11.375C20.7182 11.375 19.543 12.5503 19.543 14C19.543 15.4497 20.7182 16.625 22.168 16.625Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.83203 24.7915C7.28178 24.7915 8.45703 23.6163 8.45703 22.1665C8.45703 20.7168 7.28178 19.5415 5.83203 19.5415C4.38228 19.5415 3.20703 20.7168 3.20703 22.1665C3.20703 23.6163 4.38228 24.7915 5.83203 24.7915Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.168 24.7915C23.6177 24.7915 24.793 23.6163 24.793 22.1665C24.793 20.7168 23.6177 19.5415 22.168 19.5415C20.7182 19.5415 19.543 20.7168 19.543 22.1665C19.543 23.6163 20.7182 24.7915 22.168 24.7915Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 24.7915C15.4497 24.7915 16.625 23.6163 16.625 22.1665C16.625 20.7168 15.4497 19.5415 14 19.5415C12.5503 19.5415 11.375 20.7168 11.375 22.1665C11.375 23.6163 12.5503 24.7915 14 24.7915Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.4952 11.3751L10.8008 16.0418C10.7496 16.1305 10.7227 16.2311 10.7227 16.3335C10.7227 16.4359 10.7496 16.5365 10.8008 16.6251C10.852 16.7138 10.9256 16.7874 11.0143 16.8386C11.103 16.8898 11.2036 16.9168 11.306 16.9168H16.6948C16.7972 16.9168 16.8978 16.8898 16.9865 16.8386C17.0751 16.7874 17.1488 16.7138 17.2 16.6251C17.2512 16.5365 17.2781 16.4359 17.2781 16.3335C17.2781 16.2311 17.2512 16.1305 17.2 16.0418L14.5056 11.3751C14.4544 11.2865 14.3807 11.2128 14.292 11.1616C14.2034 11.1104 14.1028 11.0835 14.0004 11.0835C13.898 11.0835 13.7974 11.1104 13.7087 11.1616C13.6201 11.2128 13.5464 11.2865 13.4952 11.3751Z" stroke="white" stroke-width="0.583333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Content</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/about">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0013 4.6665C15.239 4.6665 16.426 5.15817 17.3011 6.03334C18.1763 6.90851 18.668 8.09549 18.668 9.33317C18.668 10.5708 18.1763 11.7578 17.3011 12.633C16.426 13.5082 15.239 13.9998 14.0013 13.9998C12.7636 13.9998 11.5766 13.5082 10.7015 12.633C9.8263 11.7578 9.33464 10.5708 9.33464 9.33317C9.33464 8.09549 9.8263 6.90851 10.7015 6.03334C11.5766 5.15817 12.7636 4.6665 14.0013 4.6665ZM14.0013 6.99984C13.3825 6.99984 12.789 7.24567 12.3514 7.68325C11.9138 8.12084 11.668 8.71433 11.668 9.33317C11.668 9.95201 11.9138 10.5455 12.3514 10.9831C12.789 11.4207 13.3825 11.6665 14.0013 11.6665C14.6201 11.6665 15.2136 11.4207 15.6512 10.9831C16.0888 10.5455 16.3346 9.95201 16.3346 9.33317C16.3346 8.71433 16.0888 8.12084 15.6512 7.68325C15.2136 7.24567 14.6201 6.99984 14.0013 6.99984ZM14.0013 15.1665C17.1163 15.1665 23.3346 16.7182 23.3346 19.8332V23.3332H4.66797V19.8332C4.66797 16.7182 10.8863 15.1665 14.0013 15.1665ZM14.0013 17.3832C10.5363 17.3832 6.88464 19.0865 6.88464 19.8332V21.1165H21.118V19.8332C21.118 19.0865 17.4663 17.3832 14.0013 17.3832Z" fill="#F8F8F8"/>
</svg>

About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/flaxcode">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83334 12.8333C5.19167 12.8333 4.64217 12.6047 4.18484 12.1473C3.7275 11.69 3.49922 11.1409 3.5 10.5V5.83334C3.5 5.19167 3.72867 4.64217 4.186 4.18484C4.64334 3.7275 5.19245 3.49922 5.83334 3.5H10.5C11.1417 3.5 11.6912 3.72867 12.1485 4.186C12.6058 4.64334 12.8341 5.19245 12.8333 5.83334V10.5C12.8333 11.1417 12.6047 11.6912 12.1473 12.1485C11.69 12.6058 11.1409 12.8341 10.5 12.8333H5.83334ZM5.83334 10.5H10.5V5.83334H5.83334V10.5ZM5.83334 24.5C5.19167 24.5 4.64217 24.2713 4.18484 23.814C3.7275 23.3567 3.49922 22.8076 3.5 22.1667V17.5C3.5 16.8583 3.72867 16.3088 4.186 15.8515C4.64334 15.3942 5.19245 15.1659 5.83334 15.1667H10.5C11.1417 15.1667 11.6912 15.3953 12.1485 15.8527C12.6058 16.31 12.8341 16.8591 12.8333 17.5V22.1667C12.8333 22.8083 12.6047 23.3578 12.1473 23.8152C11.69 24.2725 11.1409 24.5008 10.5 24.5H5.83334ZM5.83334 22.1667H10.5V17.5H5.83334V22.1667ZM17.5 12.8333C16.8583 12.8333 16.3088 12.6047 15.8515 12.1473C15.3942 11.69 15.1659 11.1409 15.1667 10.5V5.83334C15.1667 5.19167 15.3953 4.64217 15.8527 4.18484C16.31 3.7275 16.8591 3.49922 17.5 3.5H22.1667C22.8083 3.5 23.3578 3.72867 23.8152 4.186C24.2725 4.64334 24.5008 5.19245 24.5 5.83334V10.5C24.5 11.1417 24.2713 11.6912 23.814 12.1485C23.3567 12.6058 22.8076 12.8341 22.1667 12.8333H17.5ZM17.5 10.5H22.1667V5.83334H17.5V10.5ZM22.75 24.5C22.5944 24.5 22.4583 24.4417 22.3417 24.325C22.225 24.2083 22.1667 24.0722 22.1667 23.9167V22.75C22.1667 22.5944 22.225 22.4583 22.3417 22.3417C22.4583 22.225 22.5944 22.1667 22.75 22.1667H23.9167C24.0722 22.1667 24.2083 22.225 24.325 22.3417C24.4417 22.4583 24.5 22.5944 24.5 22.75V23.9167C24.5 24.0722 24.4417 24.2083 24.325 24.325C24.2083 24.4417 24.0722 24.5 23.9167 24.5H22.75ZM15.75 17.5C15.5944 17.5 15.4583 17.4417 15.3417 17.325C15.225 17.2083 15.1667 17.0722 15.1667 16.9167V15.75C15.1667 15.5944 15.225 15.4583 15.3417 15.3417C15.4583 15.225 15.5944 15.1667 15.75 15.1667H16.9167C17.0722 15.1667 17.2083 15.225 17.325 15.3417C17.4417 15.4583 17.5 15.5944 17.5 15.75V16.9167C17.5 17.0722 17.4417 17.2083 17.325 17.325C17.2083 17.4417 17.0722 17.5 16.9167 17.5H15.75ZM18.0833 19.8333C17.9278 19.8333 17.7917 19.775 17.675 19.6583C17.5583 19.5417 17.5 19.4056 17.5 19.25V18.0833C17.5 17.9278 17.5583 17.7917 17.675 17.675C17.7917 17.5583 17.9278 17.5 18.0833 17.5H19.25C19.4056 17.5 19.5417 17.5583 19.6583 17.675C19.775 17.7917 19.8333 17.9278 19.8333 18.0833V19.25C19.8333 19.4056 19.775 19.5417 19.6583 19.6583C19.5417 19.775 19.4056 19.8333 19.25 19.8333H18.0833ZM15.75 22.1667C15.5944 22.1667 15.4583 22.1083 15.3417 21.9917C15.225 21.875 15.1667 21.7389 15.1667 21.5833V20.4167C15.1667 20.2611 15.225 20.125 15.3417 20.0083C15.4583 19.8917 15.5944 19.8333 15.75 19.8333H16.9167C17.0722 19.8333 17.2083 19.8917 17.325 20.0083C17.4417 20.125 17.5 20.2611 17.5 20.4167V21.5833C17.5 21.7389 17.4417 21.875 17.325 21.9917C17.2083 22.1083 17.0722 22.1667 16.9167 22.1667H15.75ZM18.0833 24.5C17.9278 24.5 17.7917 24.4417 17.675 24.325C17.5583 24.2083 17.5 24.0722 17.5 23.9167V22.75C17.5 22.5944 17.5583 22.4583 17.675 22.3417C17.7917 22.225 17.9278 22.1667 18.0833 22.1667H19.25C19.4056 22.1667 19.5417 22.225 19.6583 22.3417C19.775 22.4583 19.8333 22.5944 19.8333 22.75V23.9167C19.8333 24.0722 19.775 24.2083 19.6583 24.325C19.5417 24.4417 19.4056 24.5 19.25 24.5H18.0833ZM20.4167 22.1667C20.2611 22.1667 20.125 22.1083 20.0083 21.9917C19.8917 21.875 19.8333 21.7389 19.8333 21.5833V20.4167C19.8333 20.2611 19.8917 20.125 20.0083 20.0083C20.125 19.8917 20.2611 19.8333 20.4167 19.8333H21.5833C21.7389 19.8333 21.875 19.8917 21.9917 20.0083C22.1083 20.125 22.1667 20.2611 22.1667 20.4167V21.5833C22.1667 21.7389 22.1083 21.875 21.9917 21.9917C21.875 22.1083 21.7389 22.1667 21.5833 22.1667H20.4167ZM20.4167 17.5C20.2611 17.5 20.125 17.4417 20.0083 17.325C19.8917 17.2083 19.8333 17.0722 19.8333 16.9167V15.75C19.8333 15.5944 19.8917 15.4583 20.0083 15.3417C20.125 15.225 20.2611 15.1667 20.4167 15.1667H21.5833C21.7389 15.1667 21.875 15.225 21.9917 15.3417C22.1083 15.4583 22.1667 15.5944 22.1667 15.75V16.9167C22.1667 17.0722 22.1083 17.2083 21.9917 17.325C21.875 17.4417 21.7389 17.5 21.5833 17.5H20.4167ZM22.75 19.8333C22.5944 19.8333 22.4583 19.775 22.3417 19.6583C22.225 19.5417 22.1667 19.4056 22.1667 19.25V18.0833C22.1667 17.9278 22.225 17.7917 22.3417 17.675C22.4583 17.5583 22.5944 17.5 22.75 17.5H23.9167C24.0722 17.5 24.2083 17.5583 24.325 17.675C24.4417 17.7917 24.5 17.9278 24.5 18.0833V19.25C24.5 19.4056 24.4417 19.5417 24.325 19.6583C24.2083 19.775 24.0722 19.8333 23.9167 19.8333H22.75Z" fill="#F8F8F8"/>
</svg>

FlaxCode</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/setting_devices">
            <FontAwesomeIcon icon={faNfcSymbol} /> 
            Add Flax Devices</NavLink>
        </li>
      
      
      
      </ul>

    </div>
    </nav>

      <div className="setting ">
      <div className="admin">
    <div className="admin_detail">
      <h1>
      User details
      </h1>
      <div className="">
    <label for="exampleFormControlInput1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
     </div>
     <div className="">
        <label for="exampleFormControlInput1" className="form-label">Job title</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Job title"/>
      </div>
      <div className="">
        <label for="exampleFormControlInput1" className="form-label">Company</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Company"/>
      </div>
    
    </div>
    <div className="admin_authentication">
      <div className='d-flex justify-content-between align-items-center mb-3'>
      <h2>
      Schedule user validity
      </h2>
      <div className="form-check form-switch">
  {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/> */}
    <div className="tg-list-item">
    <input className="tgl tgl-flat" id="cb4" type="checkbox"/>
    <label className="tgl-btn" for="cb4"></label>
  </div>
</div>
      </div>
      <div className="">
        {/* <label for="exampleFormControlInput1" className="form-label">enter number</label> */}
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Validity Starts"/>
      </div>

      {/* <div className="">
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Validity Ends"/>
      </div> */}
      <div class="form-floating mt-4">
                  <div class="did-floating-label-content">
                    <select
                      class="did-floating-select"
                      onclick="this.setAttribute('value', this.value);"
                      onchange="this.setAttribute('value', this.value);"
                    >
                      <option value>creator</option>
                      <option value="1">Alabama</option>
                      <option value="2">Boston</option>
                      <option value="3">Ohaio</option>
                      <option value="4">New York</option>
                      <option value="5">Washington</option>
                    </select>
                    <label class="did-floating-label">user type</label>
                  </div>
                </div>

      {/* <div className='d-flex justify-content-between'>
      <button type="button" className="btn btn-primary">Update</button>
      <button type="button" className="btn btn-primary">Cancel</button>
      </div> */}

    </div>
       </div>
       </div>

       <div className='signup_phone text-center'>
          <p>Live Preview <FontAwesomeIcon icon={faShareSquare} /> </p>
          <div className='signup_phone-container'>
            <img src='/phone_bannner.svg' className='img-fluid' alt='' />
            <h3>username</h3>
            <h4>company</h4>
            <h4>designation</h4>
            <div className='signup_phone-boxs'>
              <div className='signup_phone-box'>+91 8010101010</div>
              <div className='signup_phone-box'>harsh@investersclinic.in</div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
   </>
  )
}
