import React from 'react'

import certificates from '../data/cerificates.data.js'



function Certificates() {
  return (
	<>
    <section className='h-full w-full bg-black flex justify-center items-center text-white'>
		<div className='w-[90%] h-[90%] flex flex-col '>
			<h2 className='flex justify-center items-center p-2 m-4 text-2xl font-bold ' >Certificates</h2>
		{
			certificates.map((data)=>(
				<div className='h-64 w-full  p-2 rounded-lg flex  shadow-lg shadow-cyan-400 mb-8'>
				<div className=' w-[85%] h-[90%] p-2 rounded-md lg:w-[20%] lg:h-[80%] shadow-md shadow-blue-gray-400 '>
				<img src={data.img} alt="image not found" className='w-full h-full object-contain '  />
				</div>
				<div className='p-3'>
					<h2 className='text-xl font-bold text-white'>{data.name}</h2>
					<p  className=' text-gray-300 text-sm ml-2' >{data.orgnization}</p>
					<p className='text-gray-200 font-serif text-sm ml-2' >issued : {data.date}</p>
					<p className='ml-2'>{data.description}</p>
				</div>
			</div>
			))
		}
			
		</div>
	</section>

			
	</>
  )
}

export default Certificates