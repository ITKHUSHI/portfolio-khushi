import React from 'react'
import certificates from '../jsonfiles/cerificates.json'


function Certificates() {
  return (
	<>
	
		

	<main className='bg-gradient-to-tr from-black  to-orange-500 shadow-orange-400 w-full h-[100vh] justify-center items-center flex'>

		
	<div className="flex flex-nowrap overflow-x-auto scrollbar-hidden scroll-infinite space-x-4 p-4 h-96 md:h-[500px] ">
      {certificates.map((data) => {
		return (
			<>
        <div  className="flex-none w-64 sm:w-96 md:w-[580px] hover:bg-gradient-to-tr from-orange-500   shadow-orange-500 shadow-lg rounded-lg   p-4 transform perspective-500 translate-z-0 ">
          <img src={data.img} alt="Project" className="w-full   object-cover mb-4 rounded-lg  transform hover:scale-105 transition duration-300" />
             {console.log(data.img)}
		  <div>
		  <h2 className="text-lg font-semibold mb-2">{data.skill}</h2>
		  </div>

          
        </div>
		</>
		)
})}
    </div>
	
			</main>
	</>
  )
}

export default Certificates