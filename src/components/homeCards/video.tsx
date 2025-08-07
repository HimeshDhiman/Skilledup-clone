import React from 'react'
import '@/app/globals.css';

const video = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="group w-64 h-40 overflow-hidden">
  <video
    className=" border rounded-md w-full h-full transition-transform duration-700 group-hover:rotate-[360deg]"
    autoPlay
    loop
    muted
    src="/images/carvideo.mp4"
  ></video>
</div>
    </div>
  );
}

export default video
