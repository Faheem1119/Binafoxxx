import React from 'react'
import divlogo from "./images/divlogo.png"

const End = () => {
  return (
    <div class="flex">
    <div class="w-full">
      <img src={divlogo} alt="divlogo" class="h-12 w-40 ml-10 mt-10" />
      <p class="text-white ml-[40px] mt-4 w-full" >We are the best way to check the rarity of NFT <br/>collection.</p>
      </div>
      
      <div class="w-full pl-20" >
      <ul class="text-gray-300">
      <li class="text-white mt-6">SUBSCRIBE</li>
    <li class="hover:text-green-500 mt-4">Home</li>
    <li class="hover:text-green-500 mt-4">About</li>
    <li class="hover:text-green-500 mt-4">RoadMap</li>
    <li class="hover:text-green-500 mt-4">Our Team</li>
    <li class="hover:text-green-500 mt-4">FAQS</li>
     </ul>
     </div>
     <div class="w-full">
     <ul class="text-gray-300 mt-6">
     <li class="text-white mt-4">COMPANY</li>
    <li class="hover:text-green-500 mt-4">Home</li>
    <li class="hover:text-green-500 mt-4">About</li>
    <li class="hover:text-green-500 mt-4">RoadMap</li>
    <li class="hover:text-green-500 mt-4">Our Team</li>

     </ul>
     </div>
     <div >
     <h1 class="text-white flex w-full">Subscribe</h1>
     {/* <input typeof='text' placeholder='Enter your email' class="bg-gray-900 text-gray-500 border-4 border-gray-500" required/> */}
     <input type="text" id="first_name" class="h-10 mt-6 bg-gray-500 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required/>
     <button class="bg-green-500 hover:bg-black text-white font-bold py-2 px-8 rounded mt-6 hover:border-4 border-green-500 h-[40px]">
  SUBSCRIBE
</button>
     </div>
     
    </div>
  )
}

export default End
