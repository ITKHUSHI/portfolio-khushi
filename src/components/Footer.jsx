import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
 <footer className="text-white p-6 bg-gradient-to-r from-black to-blue-900">
		<div className="container mx-auto text-center">
		  <div className="flex justify-center gap-8 mb-6">
			<div>
			  <h2 className="text-xl font-bold">Frontend</h2>
			  <p>HTML, CSS, React, JavaScript</p>
			  <h2 className="text-xl font-bold mt-4">Backend</h2>
			  <p>JavaScript, Express, Java, Mongoose</p>
			</div>
			<div>
			  <h2 className="text-xl font-bold">FullStack</h2>
			  <p>React, Next.js, Express, Mongoose</p>
			  <h2 className="text-xl font-bold mt-4">Design</h2>
			  <p>Bootstrap, Tailwind CSS</p>
			</div>
		  </div>

		  <div className="flex justify-center gap-6">
			<Link target='_blank' to="https://mail.google.com/mail/u/2/?ogbl#inbox" className="text-white hover:text-gray-300">
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8"><path fill="#f7f9fd" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
			</Link>

			<Link  target='_blank' to="https://www.linkedin.com/in/khushee0225/" className="text-white hover:text-gray-300">
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8"><path fill="#f7f9fd" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
			</Link>

		  </div>
		  <p>&copy; 2025 Khushi Rathore. All Rights Reserved.</p>

		</div>
	  </footer>
  )
}

export default Footer