import React from 'react'
import Greenman from "./images/Greenman.jpg"
import blue from "./images/blue.PNG"
import brown from "./images/brown.PNG"
import Cardshadow from './Cardshadow'
import Cardimages from './Cardimages'
import Phases from './Phases'
import Workcards from './Workcards'
import Team from './Team'
import Faqs from './Faqs'
import Picsbinabox from "./Picsbinabox"
import Community from './Community'
import End from './End'
import Navbar from './Navbar'
import Skeleton from './Skeleton'



const Binabox = () => {
  return (
    <>

  <div class="bg-black h-[50px] w-full pt-[30px] pl-[30px] flex gap-20">
  <Navbar/>  
</div>
<div className="bg-black h-[750px]  lg:flex bgimage">

<div class="pt-20 pl-7">
<h1 class="text-white font-bold text-6xl pt-20">

WITH <b class="text-green-500">BINABOX </b><br/>EXPLORE NFT<br/> COLLECTION

</h1>
<h2 class="text-white text-2xl mt-3">
We are the best way to check the rarity of NFT collection
</h2>

<button class="bg-green-500 hover:bg-black border-4 border-green-500 ml-1 text-white font-bold py-2 px-8 rounded mt-2 hover:border-4 border-green-500">
  Connect Wallet
</button>

<button class="flex-column bg-black hover:bg-green-500 text-white font-bold py-2 px-8 rounded border-4 border-green-500 ml-2">
  Whitelist Now
</button>
</div>
<div class="ml-20 mt-4 lg:flex pt-20 ">


<img src={Greenman} alt="Greenman" class="h-[530px] md:[500px] w-[300px] bg-cover rounded-lg mr-6"/>;
<img src={blue} alt="blueman" class="h-[530px] md:[500px] w-[110px] mr-6 bg-cover rounded-lg"/>;
<img src={brown} alt="brownman" class="h-[530px] md:[500px] w-[110px] mr-24 bg-cover rounded-lg "/>;

</div>







</div>

<div class="bg-green-500 h-20 w-full flex">

<h1 class="font-bold text-2xl pt-6 pl-[120px]">BINABOX</h1>

<h1 class="font-bold text-2xl pt-6 pl-20">BINABOX</h1>


<h1 class="font-bold text-2xl pt-6 pl-20">BINABOX</h1>

<h1 class="font-bold text-2xl pt-6 pl-20">BINABOX</h1>

<h1 class="font-bold text-2xl pt-6 pl-20">BINABOX</h1>

<h1 class="font-bold text-2xl pt-6 pl-20">BINABOX</h1>


</div>
<div class="bg-black w-full h-[460px] pt-10 about">


<h1 class="text-5xl text-center text-white font-bold">
  ABOUT US
</h1>
<p class="text-2xl text-center text-gray-300 mt-10">
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
<br/>Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est
<br/> laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat
</p>
  
  <div class="pt-10 flex">
  <div class="pl-[380px]">
<h1 class="text-gray-300 text-center text-2xl ">
  Total Items
</h1><br/>
<h1 class="text-white text-5xl drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] font-[900]">
2250+
</h1>
</div>
  <div class="pl-[180px]">
<h1 class="text-gray-300 text-2xl">
  Profiles Whitelisted
</h1><br/>
<h1 class="text-white text-center text-5xl drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] font-[900] ">
1000+
</h1>
</div>

  </div>

</div>
<div class="bg-black h-10/6 w-full flex gap-20 pl-4">
<Cardshadow heading="High Quality" t1="Lorem Ipsum is simply" 
t2="dummy text of the printing" t3="and typesetting industry."/>
<Cardshadow heading="Big Collection" t1="Lorem Ipsum is simply" 
t2="dummy text of the printing" t3="and typesetting industry."/>
<Cardshadow heading="Top Resource" t1="Lorem Ipsum is simply" 
t2="dummy text of the printing" t3="and typesetting industry."/>
<Cardshadow heading="Big Community" t1="Lorem Ipsum is simply" 
t2="dummy text of the printing" t3="and typesetting industry."/>
</div>
<div class="bg-black h-10/6 w-full flex gap-20 pl-4 animate-[wiggle_1s_ease-in-out_infinite]">


<Skeleton/>


</div>
<Cardimages/>
<div className="bg-black w-full h-[560px] pt-20">
<h1 class="text-5xl text-center text-white font-bold">Road Map</h1>
<div class="bg-black h-10/5 w-full flex gap-20 pl-4 mt-48  overflow-x-scroll overflow-x-hidden">
<Phases heading="Phase 1" li1="Befriending & Chat Functions" li2="Challenging Feature" li3="Corsair Wheel" li4="Mobile Version" />
<Phases heading="Phase 2" li1="Befriending & Chat Functions" li2="Challenging Feature" li3="Corsair Wheel" li4="Mobile Version" />
<Phases heading="Phase 3" li1="Befriending & Chat Functions" li2="Challenging Feature" li3="Corsair Wheel" li4="Mobile Version" />
<Phases heading="Phase 4" li1="Befriending & Chat Functions" li2="Challenging Feature" li3="Corsair Wheel" li4="Mobile Version" />
<Phases heading="Phase 5" li1="Befriending & Chat Functions" li2="Challenging Feature" li3="Corsair Wheel" li4="Mobile Version" />
<Phases heading="Phase 6" li1="Befriending & Chat Functions" li2="Challenging Feature" li3="Corsair Wheel" li4="Mobile Version" />


</div>
</div>

<div class="bg-black w-full h-[460px] pt-10">
<h1 class="text-5xl text-center text-white font-bold">How to <b class="text-green-500">BINABOX </b>Work</h1>
<div class="bg-black h-10/5 w-full flex gap-10 pl-4 mt-20">
  <Workcards heading="CONNECT THE WALLET" li1="Duis aute irure dolor in" li2="reprehenderit in voluptate" li3="velit esse cillum dolore eu" li4="fugiat." />
  <Workcards heading="SELECT THE QUALITY" li1="Duis aute irure dolor in" li2="reprehenderit in voluptate" li3="velit esse cillum dolore eu" li4="fugiat." />
  <Workcards heading="CONFIRM TRANSACTION" li1="Duis aute irure dolor in" li2="reprehenderit in voluptate" li3="velit esse cillum dolore eu" li4="fugiat." />
  <Workcards heading="RECEIVE YOUR NFTS" li1="Duis aute irure dolor in" li2="reprehenderit in voluptate" li3="velit esse cillum dolore eu" li4="fugiat." />
  
</div>
</div>
<div class="bg-black w-full h-[460px] pt-10">
<h1 class="text-5xl text-center text-white font-bold">OUR TEAM</h1>

<Team/>


</div>

<div class="bg-black w-full h-[460px] pt-20">
<h1 class="text-5xl text-center text-white font-bold">FAQS</h1>

<Faqs/>
</div>
<div class="bg-black w-full h-[960px] pt-[500px]">
<h1 class="text-5xl text-center text-white font-bold"><b class="text-green-500">BINABOX </b>PARTNER</h1>
<Picsbinabox/>
</div>
<div className="bg-[#1E90FF] w-full h-[300px] pt-[80px] join">

<Community/>
</div>


<div className="bg-black w-full h-[400px] pl-[2px] pt-10 footer">

<End/>


</div>

    </>

  )
}

export default Binabox
