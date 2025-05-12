import "./SubContentMobile.css"
// import { useState } from "react"




export default function SubContentMobile({children,height,width}) {
  // if (!isOpen) return null; // Prevent unnecessary rendering

  return (
    <div className="mobile-subcontent-overlay" 
    style={{
      height: height,
      width: width,
    }}>
      
      {children}
    </div>
  );
}
