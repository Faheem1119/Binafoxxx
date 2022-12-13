import React from 'react'
import Greenman from "./images/Greenman.jpg"
import rednman from "./images/redman.jpg"
import bmonster from "./images/bmonster.jpg"
import grayman from "./images/grayman.jpg"


const skeleton = () => {
  return (
    <>
      
      <div class="mt-10 max-w-sm bg-gray-900 hover:border-4 border-green-600">
    
    <img class="rounded-t-lg pt-5 pl-3 pr-3" src={Greenman} alt="Greenman"/>
    {/* <img src={Greenman} alt="Greenman" class="h-[390px] md:[500px] w-[300px]"/>; */}

<div class="p-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">Skeleton#01</h5>
    
   
</div>
</div>
<div class="mt-10 max-w-sm bg-gray-900 hover:border-4 border-green-600 ">
    
    <img class="rounded-t-lg pt-5 pl-3 pr-3" src={rednman} alt="Greenman"/>
    {/* <img src={Greenman} alt="Greenman" class="h-[390px] md:[500px] w-[300px]"/>; */}

<div class="p-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">Skeleton#02</h5>
    
   
</div>
</div>
<div class="mt-10 max-w-sm bg-gray-900 hover:border-4 border-green-600">
    
    <img class="rounded-t-lg pt-5 pl-3 pr-3" src={bmonster} alt="Greenman"/>
    {/* <img src={Greenman} alt="Greenman" class="h-[390px] md:[500px] w-[300px]"/>; */}

<div class="p-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">Skeleton#03</h5>
    
   
</div>
</div>
<div class="mt-10 max-w-sm bg-gray-900 hover:border-4 border-green-600">
    
    <img class="rounded-t-lg pt-5 pl-3 pr-3" src={grayman} alt="Greenman"/>
    {/* <img src={Greenman} alt="Greenman" class="h-[390px] md:[500px] w-[300px]"/>; */}

<div class="p-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">Skeleton#04</h5>
    
   
</div>
</div>




    </>
  )
}

export default skeleton
