import React from "react"
import reactLogo from "../images/logo512.png";


//this is the header structure of the application
function Header(){
    return (
      <header className = "header">
              <nav className="nav">
                  <img src = {reactLogo} className="image-logo" alt="reactLogo"/>
                  <ul className="nav-items">
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>    
                  </ul>
              </nav>    
      </header>
  )
  }

  export default Header;