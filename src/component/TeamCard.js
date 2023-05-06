import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
export default function TeamCard() {
  return (
<>
<div className='teamCard row gap-3'>
    
<button class="teamCard_btn col-3">
    <span>
      <FontAwesomeIcon icon={faUser} />
      </span>
    <h3>
    Harsh Vardhan
    </h3>
    <h4>
    CTO at Investors Clinic
    </h4>
    <div className='d-flex gap-2'>
    <button class="editCard">
      <FontAwesomeIcon icon={faPencil} />
    Edit Card
   
</button>
    <button class="ShareCard">
      <FontAwesomeIcon icon={faShareSquare} />
      Share Card
   
</button>
    </div>
</button>

<button class="add_btn col-3">
    <span>
      <FontAwesomeIcon icon={faPlus} />
      </span>
    <p>
    Create New Cards
    </p>
</button>

</div>
</>
  )
}
