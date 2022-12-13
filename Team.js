import React from 'react'
import team1 from "./images/team1.jpg"
import team2 from "./images/team2.jpg"
import team3 from "./images/team3.jpg"
import team4 from "./images/team4.jpg"

function Team(){
  return (
    <div>
   <div class="bg-black h-10/5 w-full flex gap-10 pl-4 mt-20">
    <div class="w-[300px]  bg-gray-900 h-[300px] hover:border-4 border-green-600">
 

 <div class="px-6 py-4 content-center">
   
   
   <img src={team1} alt="divlogo" class="rounded-full object-center ml-12" />;
   <h1 class="text-white text-2xl font-bold pl-8">Ralph Edwards</h1>
   
   <p class="text-gray-400 ml-16"><br/>Founder</p>
 
 </div>
</div> 
   <div class="w-[300px] object-center  bg-gray-900 h-[300px] hover:border-4 border-green-600">
 

 <div class="px-6 py-4">
   
   
   <img src={team2} alt="divlogo" class="rounded-full object-center ml-12" />;
   <h1 class="text-white text-2xl font-bold pl-8">Jason Smith</h1>
   
   <p class="text-gray-400 ml-16"><br/>Co-Founder</p>
 
 </div>
</div> 
   <div class="w-[300px] object-center  bg-gray-900 h-[300px] hover:border-4 border-green-600">
 

 <div class="px-6 py-4">
   
   
   <img src={team3} alt="divlogo" class="rounded-full object-center ml-12" />;
   <h1 class="text-white text-2xl font-bold pl-12">Tony Wigs</h1>
   
   <p class="text-gray-400 ml-16"><br/>Web Designer</p>
 
 </div>
</div> 
   <div class="w-[300px] object-center  bg-gray-900 h-[300px] hover:border-4 border-green-600">
 

 <div class="px-6 py-4">
   
   
   <img src={team4} alt="divlogo" class="rounded-full object-center ml-12" />;
   <h1 class="text-white text-2xl font-bold pl-8">Esthar Howard</h1>
   
   <p class="text-gray-400 ml-16"><br/>Project Manager</p>
 
 </div>
</div> 
</div>
</div>
  )
}

export default Team
