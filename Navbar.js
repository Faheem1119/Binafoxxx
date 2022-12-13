import React from 'react'
import divlogo from "./images/divlogo.png"
import sun from "./images/sun.png"

const Navbar = () => {
  return (
    <>
    
        <img src={divlogo} alt="divlogo" class="h-7 w-40" />;
      
        <div className="dropdown">
  <span class="text-white font-bold">Home</span>
  <div class="dropdown-content">
  <ul >
    <li class="hover:text-green-600 text-white">Home 01</li>
    <li class="hover:text-green-600 text-white">Home 02</li>
    <li class="hover:text-green-600 text-white">Home 03</li>
  </ul>
  </div>
</div>
        <div className="dropdown">
  <span class="text-white font-bold">About</span>
  <div class="dropdown-content">
  <ul >
    <li class="hover:text-green-600 text-white">Home 01</li>
    <li class="hover:text-green-600 text-white">Home 02</li>
    <li class="hover:text-green-600 text-white">Home 03</li>
  </ul>
  </div>
</div>
       
       <div className="dropdown">
  <span class="text-white font-bold">Road Map</span>
  <div class="dropdown-content">
  <ul >
    <li class="hover:text-green-600 text-white">Home 01</li>
    <li class="hover:text-green-600 text-white">Home 02</li>
    <li class="hover:text-green-600 text-white">Home 03</li>
  </ul>
  </div>
</div>
        <div className="dropdown">
  <span class="text-white font-bold">Pages</span>
  <div class="dropdown-content">
  <ul >
    <li class="hover:text-green-600 text-white">Home 01</li>
    <li class="hover:text-green-600 text-white">Home 02</li>
    <li class="hover:text-green-600 text-white">Home 03</li>
  </ul>
  </div>
</div>
        <div className="dropdown">
  <span class="text-white font-bold">Blog</span>
  <div class="dropdown-content">
  <ul >
    <li class="hover:text-green-600 text-white">Home 01</li>
    <li class="hover:text-green-600 text-white">Home 02</li>
    <li class="hover:text-green-600 text-white">Home 03</li>
  </ul>
  </div>
</div>
        <div className="dropdown">
  <span class="text-white font-bold">Contact</span>
  <div class="dropdown-content">
  <ul >
    <li class="hover:text-green-600 text-white">Home 01</li>
    <li class="hover:text-green-600 text-white">Home 02</li>
    <li class="hover:text-green-600 text-white">Home 03</li>
  </ul>
  </div>
</div>
      
      <img src={sun} alt="sun" class="ml-9 h-9 w-9" />
      
    </>
  )
}

export default Navbar
