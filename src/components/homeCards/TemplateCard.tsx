import React from 'react';
import BadgeButton from '../ui/badge-button';

const courses = [
  {
    title: "Data Analytics Pro - Offline",
    image: "https://www.skilledup.tech/media/image/3594683skilledup_2.0_course_size_image_(10).jpg",
    price: "₹6,000.00",
    type: "Offline",
    reviews: 5,
    duration: "2 Month / 3 Months",
    language: "Hinglish",
  },
  {
    title: "Data Analytics Pro - Online",
    image: "https://www.skilledup.tech/media/image/3594683skilledup_2.0_course_size_image_(10).jpg",
    price: "₹3,000.00",
    type: "Online",
    reviews: 5,
    duration: "2 / 3 Months",
    language: "Hinglish",
  },
  {
    title: "Data Science With Generative AI - Online",
    image: "https://www.skilledup.tech/media/image/3594683skilledup_2.0_course_size_image_(10).jpg",
    price: "₹40,000.00",
    type: "Online",
    reviews: 5,
    duration: "9 Months",
    language: "Hinglish",
  },
];

const TemplateCard = () => {
  return (
    <div className="p-6 rounded-2xl shadow-[0_0_20px_#00000033] dark:shadow-[0_0_20px_#ffffff33] bg-card text-card-foreground dark:bg-[#1a1a1a]  dark:text-gray-100 w-full py-10  mb-10">
        <h4 className="text-[#101828] dark:text-white md:text-2xl  text-center   font-bold text-6xl mt-12 mb-12">
        Industry-Driven Courses for Career Success 
      </h4>
        
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between flex-wrap gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-card text-card-foreground shadow-md rounded-xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] transition-transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-2">
                <span className="text-xs bg-muted rounded-fulltext-xs px-2 py-1  rounded-full">{course.type}</span>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground ">💬 ({course.reviews} Reviews)</p>
                <p className="text-sm text-muted-foreground ">📅 Duration: {course.duration}</p>
                <p className="text-sm text-muted-foreground ">🌐 Language: {course.language}</p>
                <p className="text-sm text-muted-foreground font-bold ">{course.price}</p>

                <div className="flex justify-between mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Enroll Now</button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">👁 View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




      
    </div>
  );
};

export default TemplateCard;
