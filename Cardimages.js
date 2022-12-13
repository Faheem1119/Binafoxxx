import React from 'react'
import Greenman from "./images/Greenman.jpg"
import s1 from "./images/s1.jpg"
import s2 from "./images/s2.jpg"
import s3 from "./images/s3.jpg"
import s4 from "./images/s4.jpg"
import s5 from "./images/s5.jpg"
import s6 from "./images/s6.jpg"

function Cardimages({h1,img}){
  return (
    <div>
<div class="bg-black h-10/6 w-full flex gap-20 pl-4">
<div class="mt-10 max-w-sm bg-gray-900 h-[260px] hover:border-4 border-green-600">
    
    {/* <img src={img} class="rounded-t-lg pt-10 pl-5" /> */}
    <img src={s1} alt="Greenman" class=" md:[500px] w-[300px] pt-5 pl-3 pr-3"/>;

<div class="pl-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">SKISIRS#01</h5>
    
   
</div>
</div>


<div class="mt-10 max-w-sm bg-gray-900 h-[260px] hover:border-4 border-green-600">
    
    {/* <img src={img} class="rounded-t-lg pt-10 pl-5" /> */}
    <img src={s2} alt="Greenman" class=" md:[500px] w-[300px] pt-5 pl-3 pr-3"/>;

<div class="pl-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">SKISIRS#02</h5>
    
   
</div>
</div>
<div class="mt-10 max-w-sm bg-gray-900 h-[260px] hover:border-4 border-green-600">
    
    {/* <img src={img} class="rounded-t-lg pt-10 pl-5" /> */}
    <img src={s3} alt="Greenman" class=" md:[500px] w-[300px] pt-5 pl-3 pr-3"/>;

<div class="pl-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">SKISIRS#03</h5>
    
   
</div>
</div>
<div class="mt-10 max-w-sm bg-gray-900 h-[260px] hover:border-4 border-green-600">
    
    {/* <img src={img} class="rounded-t-lg pt-10 pl-5" /> */}
    <img src={s4} alt="Greenman" class=" md:[500px] w-[300px] pt-5 pl-3 pr-3"/>;

<div class="pl-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">SKISIRS#04</h5>
    
   
</div>
</div>
<div class="mt-10 max-w-sm bg-gray-900 h-[260px] hover:border-4 border-green-600">
    
    {/* <img src={img} class="rounded-t-lg pt-10 pl-5" /> */}
    <img src={s5} alt="Greenman" class=" md:[500px] w-[300px] pt-5 pl-3 pr-3"/>;

<div class="pl-5">

    
        <h5 class="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">SKISIRS#05</h5>
    
   
</div>
</div>
</div>
    </div>
  )
}

export default Cardimages
