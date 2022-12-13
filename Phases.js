import React from 'react'

function Phases({heading,li1,li2,li3,li4}){
  return (
    <div>
 

 <div class="w-[300px]  bg-gray-900 h-[200px] hover:border-4 border-green-600">
    

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-white">
      {heading}</div>
      <ul class="text-gray-400">
      <li>{li1}</li>
      <li>{li2}</li>
      <li>{li3}</li>
      <li>{li4}</li>


      </ul>
    
    </div>
  </div> 
</div>



  )
}

export default Phases
