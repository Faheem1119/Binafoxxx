import React from 'react'

function Cardshadow({heading,t1,t2,t3}){
  return (
    <>
    
      {/* <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 h-10/5 hover:border-4 border-green-200"> */}
      <div class="mt-10 w-[300px] bg-gray-900">

  <div className="px-6 py-4 color hover:border-4 border-green-600">
    <div class="font-bold text-xl mb-2 text-white">
    {heading}</div>
    <p class="text-white text-base">
     {t1}<br/>{t2}<br/>{t3}
    </p>
  
  </div>
</div> 


    </>
  )
}

export default Cardshadow
