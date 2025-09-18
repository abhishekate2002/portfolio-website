import "./DeskSubContent.css"
// import { useState } from "react"




export default function DeskSubContent({children,height,width}) {
  // if (!isOpen) return null; // Prevent unnecessary rendering

  return (
    <div className="desk-subcontent-overlay" 
    style={{
      height: height,
      width: width,
    }}>
      {children}
    </div>
  );
}
