import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default function AddLink() {
  return (
    <div className='addlink'>
 
   <div className='addcard_links'>
   <div className='addcard_link-item-icon'>
        <FontAwesomeIcon icon={faPhone} /> 
      </div>
        <h1>
    Add phone to card
    </h1>
     </div>
  </div>
  )
}
