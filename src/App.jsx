import { useEffect, useState } from 'react'
import './App.css'
import Desktop from './Desktop/Desktop'
import Mobile from './Mobile/Mobile'
function App() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust the width threshold
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (

    <div className={isDesktop ? "app-container" : "mobile-app-container"}>
      {isDesktop? <Desktop/> : <Mobile/>}
    </div>
  )
}

export default App
