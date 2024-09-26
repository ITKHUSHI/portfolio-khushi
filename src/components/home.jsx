import React ,{useState} from 'react';
import  SparklesCore  from '../components/ui/sparkles.jsx';
import { Link } from 'react-router-dom';
import khushiImage from '/images/khushi.png';
import { TextGenerateEffect } from "../components/ui/text-generate-effect.jsx";
 

const Home = () => {
  const words=`Hello, I'm Khushi Rathore! 👋`;
  

  return (
    <>
  

  <main className=' bg-black shadow-xl  w-full '>
 
  <header className="flex flex-col   md:flex-row items-center justify-center p-8   ">
       
      <div className="order-1  mt-16  rounded-full  px-4 mb-4 md:mb- 0  items-center justify-center flex  ">
        <img
          src={khushiImage}
          alt="Your Image"
          className="hover:scale-110 + hover:transition-all rounded-full  shadow-cyan-500 mx-auto md:ml-0 h-auto md:h-full md:w-auto shadow-lg  "
          style={{ maxWidth: '200px' }} // Adjust the maximum width of the image as needed
        />
       
      </div>

          <div className=" md:order-2 w-full  px-4 p-2 sm:mt-16  text-white  justify-center items-center  ">
          <div className='ontent p-4  border border-black border-radius-custom flex flex-col justify-start items-start '>
          
        <span className="mb-4 text-lg leading-relaxed   "> 
        <TextGenerateEffect words={words} />
        <p>I'm an aspiring Software Engineer with a passion for building innovative, user-friendly applications. Aligned with the latest web technologies, I specialize in MERN Stack development, crafting both frontend and backend solutions. My journey revolves around transforming ideas into functional, beautiful digital experiences, whether it's designing seamless user interfaces or building robust, scalable server-side applications.
        Let's create something amazing together!</p>
</span>
       
          </div>
          
      </div>
      
    </header>
   
   <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.6}
          maxSize={2.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />  
   
   </main>
    
    <section className='bg-black text-white justify-center items-center flex flex-col w-full ml-12'>
        <h2 className='text-center font-bold  text-2xl'>VidStream Hub</h2>
    
     <div className='w-full justify-evenly flex flex-col md:flex-row'>
        <div className=' md:w-[50%] p-4 '>
        <div className=' align-center justify-center flex flex-col ' >

               <p>Project Overview: VidStream Hub is a full-featured video-sharing platform built using the MERN Stack (MongoDB, Express, React, Node.js). It allows users to seamlessly log in through Google or Gmail authentication, upload their own videos, watch videos uploaded by others, interact through likes and comments, and subscribe to content channels they enjoy. This platform empowers content creators and viewers to engage, share, and explore diverse video content in a modern and intuitive environment.</p>
                <img src="./images/videoProject1.png" alt="" className='p-2 w-[80%] '  />
                <p>
                <br />
State Management: Powered by Redux, ensuring smooth state handling across the app.
<br />
API Integration: All backend API interactions are managed through Axios.
<br />
Stylish UI: The user interface is designed using Tailwind CSS, offering a sleek, modern look and mobile responsiveness.

                </p>
               </div>
        </div>
        <div className=' md:w-[50%] align-center justify-center flex flex-col md:flex-row' >
               <div className='w-[70%]  p-4 '>
               <img src="./images/videoProject1.png" alt="" className='w-[80%] m-4'  />
                 <p>

Key Features:
<br />
User Authentication: Secure login via Google or Gmail, simplifying the user experience with one-click authentication.
<br />
Video Uploading: Users can upload their own videos, with file uploads managed through Multer.
<br />
Video Interaction: Viewers can watch videos, like them, comment on them, and subscribe to specific channels for updates on new content.
<br />
Content Feed: Explore uploaded videos by other users, enabling content discovery.
<br />
Real-time Notifications: Utilizes React-hot-toast for instant feedback on actions like uploads, comments, and subscriptions.
</p>
               </div>
        </div>
      </div> 
      <div className='flex flex-wrap justify-center items-center md:flex-col'> 
     <h1 className='font-bold text-xl'> Technologies Used:</h1>  

MongoDB for database management
<br />
Express for server-side routing and middleware handling
<br />
Node.js for backend runtime environment
<br />
Multer for handling file uploads (video files)
<br />
React for building the frontend UI
<br />
React-hot-toast for notification handling
<br />
Tailwind CSS for styling and responsive design
<br />
Axios for API requests
<br />
Redux for global state management
<br />
<br/>
 <strong className='font-bold text-xl'>Current Status:</strong>   VidStream Hub is still a work in progress, with some features under development. While it's not deployed yet, you can view the project's progress and code via my portfolio.


      </div>
    </section>
  
    <footer className="text-white bg-black p-6 flex justify-center items-center">
        <div className="bg-black mt-24 flex justify-center  sm:justify-between items-center  lg:mt-0 flex-col  ">

        <div className='flex justify-between items-center  gap-4 lg:gap-8'>
            <div className='mr-2'>
            <h2 className="text-xl font-bold">
            Frontend :
          </h2>
          <p>HTML , CSS , React js , javaScript</p>
          
          <h2 className="text-xl font-bold">
            Backend :
          </h2>
          <p>javaScript , Express js , java , Mongoose</p>
          <h2 className="text-xl font-bold">
            FullStack :
          </h2>
          <p> React js, Next js, java, Express js , javaScript , Mongoose</p>
          <h2 className="text-xl font-bold">
            Design :
          </h2>
          <p>Bootstrap , Tailwind CSS</p>
            </div>
            <div>
            
          <h2 className="text-xl font-bold">
            Api Testing:
          </h2>
          <p>Postman</p>
          
            
            <h2 className="text-xl font-bold">
            File Uploads:
          </h2>
          <p>Multer</p>
          <h2 className="text-xl font-bold">
          Version Control :
          </h2>
          <p>GitHub</p>
          
            </div>
            </div>
     
            <div >
   <ul  className=" items-center justify-start flex p-2 m-4 gap-4">       
        <li className=' hover:scale-100 scale-75 flex justify-center items-center w-[35px] h-[35px] bg-gradient-to-tr from-black to-green-500 rounded-full shadow-lg  shadow-green-500 text-white text-center'>
           <Link to="https://mail.google.com/mail/u/2/?ogbl#inbox">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
        className='  w-[25px] h-[25px]  text-white'
        ><path fill="#f7f9fd" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
       
        </Link>
         </li > 
        <li className=' flex justify-center items-center w-[35px] h-[35px] hover:scale-100 scale-75 bg-gradient-to-tr  from-blue-700 to-blue-500 rounded-full shadow-lg  shadow-blue-500 text-white text-center'>
           <Link to="https://www.linkedin.com/in/khushee0225/" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[30px] h-[30px] rounded-full' ><path  fill="#f7f9fd" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
        </Link></ li >
      </ul>
   </div>
        
            
        </div>
      </footer>
 
  
 
   
    
    </>
  );
};

export default Home;
