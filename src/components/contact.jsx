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
  href="https://mail.google.com/mail/?view=cm&fs=1&to=khushee0225@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 border-red-400 border rounded-lg hover:bg-blue-600 transition text-white"
>
  <FaEnvelopeSquare /> Email
</a>


            </div>
   
     
    </section>
	</>
  )
}

export default Contact