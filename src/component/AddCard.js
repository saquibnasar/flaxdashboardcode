import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddCard() {
  return (
    <>
    <div className='addcard'>
      <div className='addcard_container'>
     <h1>
     Add content to card
     </h1>
     <p className='addcard_container-para'>
     Select from our wide variety of links and contact info below
     </p>
     <div className='addcard_links'>
     <div className='addcard_link'>
      <div className='addcard_link-item'>
       <div className='addcard_link-item-icon'>
        <FontAwesomeIcon icon={faPhone} /> 
      </div>
        <p>Call</p> 
      </div>
     
     <div className='addcard_link-add'>
        <FontAwesomeIcon icon={faPlus} /> 
     </div>
     </div>
     <div className='addcard_link'>
      <div className='addcard_link-item'>
       <div className='addcard_link-item-icon'>
        <FontAwesomeIcon icon={faPhone} /> 
      </div>
        <p>Call</p> 
      </div>
     
     <div className='addcard_link-add'>
        <FontAwesomeIcon icon={faPlus} /> 
     </div>
     </div>
     <div className='addcard_link'>
      <div className='addcard_link-item'>
       <div className='addcard_link-item-icon'>
        <FontAwesomeIcon icon={faPhone} /> 
      </div>
        <p>Call</p> 
      </div>
     
     <div className='addcard_link-add'>
        <FontAwesomeIcon icon={faPlus} /> 
     </div>
     </div>
     <div className='addcard_link'>
      <div className='addcard_link-item'>
       <div className='addcard_link-item-icon'>
        <FontAwesomeIcon icon={faPhone} /> 
      </div>
        <p>Call</p> 
      </div>
     
     <div className='addcard_link-add'>
        <FontAwesomeIcon icon={faPlus} /> 
     </div>
     </div>
    
     </div>
     </div>
    </div>
    </>
  )
}
