import React from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";
import TeamCard from "./TeamCard";

export default function Setting() {
  return (
<>
<div className="d-flex">
      <SIdebar/>
      <div className="d-flex flex-direction-column">
      <Topbar type="setting"/>
      <TeamCard/>
      </div>
      </div>
</>
  )
}
