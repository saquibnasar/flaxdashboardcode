import React from "react";
import SIdebar from "./SIdebar";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
          <div className="d-flex">
      <SIdebar/>
      <div className="d-flex flex-direction-column">
        
      <Topbar/>
      </div>
      </div>
    </>
  );
}
