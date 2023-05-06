import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faNfcSymbol } from "@fortawesome/free-brands-svg-icons"
import { NavLink} from "react-router-dom";
export default function SIdebar() {
  return (
    <nav className="sidebar">
  
    <a className="sidebar-brand" href="/">
      <img className='img-fluid' src="/logofill.svg" alt=''/>
      </a>
   
    <div className="sidebar-collapse">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
          <FontAwesomeIcon icon={faUser} />
            My Cards</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/devices"><FontAwesomeIcon icon={faNfcSymbol} /> Devices</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/fetflaxdevices"><FontAwesomeIcon icon={faBasketShopping} /> <div className='d-flex gap-2' >Get Flax Devices <FontAwesomeIcon icon={faShareSquare} /> </div></NavLink>
        </li>
        <li className="nav-box">
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/setting"><FontAwesomeIcon icon={faGear} /> Settings</NavLink>
        </li>
      </ul>
      <button class="btn btn-primary">Upgrade Now</button>
    </div>

</nav>
  )
}
