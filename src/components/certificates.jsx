import React from 'react'

import certificates from '../data/cerificates.data.js'



function Certificates() {
	return (
	  <>
		<section className="h-full w-full bg-gradient-to-r from-black to-blue-900 flex justify-center items-center text-white py-10">
		  <div className="w-[90%] lg:w-[80%] space-y-12">
			<h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
			  Certificates
			</h2>
  
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			  {certificates.map((data, index) => (
				<div key={index} className="flex flex-col justify-between items-center group relative hover:scale-105 transition-transform duration-300 ease-in-out">
				  <div className="w-full h-48 sm:h-56 md:h-64 p-2 bg-gradient-to-t from-gray-800 to-gray-600 rounded-xl shadow-lg overflow-hidden">
					<img
					  src={data.img}
					  alt="Certificate"
					  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
					/>
				  </div>
				  <div className="p-4 text-center mt-4">
					<h3 className="text-xl font-semibold">{data.name}</h3>
					<p className="text-sm text-gray-400">{data.organization}</p>
					<p className="text-xs text-gray-300 mt-2">{data.date}</p>
					<p className="text-sm text-gray-300 mt-2">{data.description}</p>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		</section>
	  </>
	);
  }
  

export default Certificates