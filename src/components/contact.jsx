import React ,{useState} from 'react'
import sendContactForm  from '../api/contactApi';


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
	 <section className=" p-32 lg:p-0 bg-black  w-full h-full lg:h-[100vh]  ">
    <span className='flex justify-center items-center text-white text-2xl '><strong className='lg:m-12'>CONTACT ME</strong> </span>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-2">
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
      </form>
    </section>
	</>
  )
}

export default Contact