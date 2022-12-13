import React from 'react'

function Workcards({heading,li1,li2,li3,li4}){
  return (
    <div>
       <div class="w-[300px]  bg-gray-900 h-[200px] hover:border-4 border-green-600">
    

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-white">
      {heading}</div>
      <p class="text-gray-400">{li1}<br/>{li2}<br/>{li3}<br/>{li4}</p>
    
    </div>
  </div> 
</div>


    
  )
}

export default Workcards
