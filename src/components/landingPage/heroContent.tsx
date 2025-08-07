import { ArrowRight } from 'lucide-react';
import React from 'react'
import WrapButton from '../ui/wrap-button';

const heroContent = () => {
  return (
    <div className=" bg-background text-foreground min-h-150  flex items-center justify-center px-2 py-5">
      <div className="p-4 rounded-lg shadow-md shadow-black dark:shadow-white bg-white dark:bg-[#121212] transition-colors duration-300 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left: Image + Text */}
        <div className="bg-card text-card-foreground p-2 md:p-10   flex flex-col justify-center items-start space-y-6 relative">
          <img
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="robot"
            className="w-full rounded-xl object-contain"
          />
          
        </div>

        {/* Right: Form */}
        <div className="bg-card text-card-foreground p-6 md:p-10  ">
          <h3 className="text-[#101828] dark:text-white text-xl md:text-2xl font-extrabold text-center font-sans">
            Aapke Sapno Ka Shortcut - skilledUp!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center text-sm mt-2 space-x-2">
            <span>📚 <a href="#" className="text-blue-600 underline">Offline</a></span>
            <span>💻 <a href="#" className="text-blue-600 underline">Online</a></span>
            <span>🎥 <a href="#" className="text-blue-600 underline">Pre-recorded</a></span>
            <span>🚀 <a href="#" className="text-blue-600 underline">Internship & Beyond</a></span>
          </p>

          <form action="course.php" method="get" className="mt-8 space-y-4">
            <select
              name="category_id"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>Select Category</option>
              <option value="11">Data Science</option>
              <option value="14">Free Course</option>
              <option value="15">MasterClass</option>
            </select>

            <select
              name="course_id"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>Select Course</option>
              <option value="101">DS Bootcamp</option>
              <option value="102">Python Mastery</option>
            </select>

          
          <WrapButton className=' flex justify-between w-full items-center '>
            Search 
          </WrapButton>
          </form>
        </div>
      </div>



      
    </div>
  );
};

export default heroContent
