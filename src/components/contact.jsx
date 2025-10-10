import React ,{useState} from 'react'
import sendContactForm  from '../api/contactApi';
import { FaGithub , FaLinkedin , FaEnvelopeSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom'


function Contact() {
	const [formData , setFormData] = useState({
		name:'',
		email:'',
		contact:'',
		message:'',
	   }) ;
	   const handleChange=(e)=>{
		const {name , value}=e.target;
		setFormData({
		  ...formData,
		  [name]:value
		});
	   };
	   const handleSubmit= async (e)=>{
		e.preventDefault();
		// console.log(formData);
		setFormData({
		  name:'',
		  email:'',
		  contact:'',
		  message:''
		});
		await sendContactForm(formData)
	   };
  return (
	<>
	 <section className=" p-2  w-full h-full  gap-4 lg:gap-0 flex flex-col justify-center items-center ">
     
    <span className='flex justify-center items-center text-white text-2xl '><strong className='lg:m-12'>CONTACT ME</strong> </span>
    <div className="flex gap-4">
              <Link
                to="https://github.com/ITKHUSHI" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub /> GitHub
              </Link>
              <Link
                to="https://www.linkedin.com/in/khushee0225/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-3 py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition text-white"
              >
                <FaLinkedin /> LinkedIn
              </Link>
              <a
                href="mailto:khushee0225@gmail.com"
                target="_blank"
                 rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 border-red-400 border rounded-lg hover:bg-blue-600 transition text-white"
              >
              <FaEnvelopeSquare /> Email
               </a>

            </div>
   
      {/* <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-2 ">
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-white">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            autoComplete="tel"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 p-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form> */}
     
    </section>
	</>
  )
}

export default Contact