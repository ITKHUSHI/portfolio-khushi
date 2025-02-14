import React from 'react'

function FlowerAnimation() {
  return (
	<>
	 <div class="flex justify-center items-center h-screen ">
  <div class="relative w-40 h-60 flex flex-col items-center">

    <div class="absolute top-4 left-3 w-12 h-12 bg-red-800  rounded-full opacity-0 animate-bloom"></div>
     <div class="absolute top-16 right-3 w-12 h-12 bg-pink-800 rounded-full opacity-0 animate-bloom delay-200"></div>
    <div class="absolute top-16 left-3 w-12 h-12 bg-green-800 rounded-full opacity-0 animate-bloom delay-400"></div>
    <div class="absolute  top-20 rigth-3 w-12 h-12 bg-orange-700 rounded-full opacity-0 animate-bloom delay-600"></div>

     <div class="absolute bottom-[74%] right-3 w-12 h-12 bg-yellow-800 rounded-full opacity-0 animate-bloom delay-200"></div>
    <div class="absolute  bottom-70 rigth-3 w-12 h-12 bg-indigo-800 rounded-full opacity-0 animate-bloom delay-600"></div>
    

    {/* <div class="absolute bottom-4 w-4 bg-green-900 opacity-0 h-0 animate-growStem"></div> */}
  </div>
</div>


	</>

  )
}

export default FlowerAnimation