import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons"
export default function SIdebar() {
  return (
    <nav className="sidebar">
  
    <a className="sidebar-brand" href="/">
      <img className='img-fluid' src="/logofill.svg" alt=''/>
      </a>
   
    <div className="sidebar-collapse">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
          <FontAwesomeIcon icon={faUser} />
            My Cards</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><FontAwesomeIcon icon={faNfcSymbol} /> Devices</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><FontAwesomeIcon icon={faBasketShopping} /> <div className='d-flex gap-2' >Get Flax Devices <FontAwesomeIcon icon={faShareSquare} /> </div></a>
        </li>
        <li className="nav-box">
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><FontAwesomeIcon icon={faGear} /> Settings</a>
        </li>
      </ul>
      <button class="btn btn-primary">Upgrade Now</button>
    </div>

</nav>
  )
}
