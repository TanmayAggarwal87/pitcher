import React from 'react'
import { auth } from '../../../../../auth'
import { redirect } from 'next/navigation';
import StartupForm from '@/components/StartupForm';
import { Toaster } from "react-hot-toast";



const page = async() => {
    const session = await auth();
    if(!session) redirect("/")
  return (
    <div>
        <div className="relative bg-blue-700 w-full min-h-[200px] flex justify-center items-center flex-col py-10 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern 
                    id="diagonal-grid" 
                    width="40" 
                    height="40" 
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                    >
                    <rect width="40" height="40" fill="none"/>
                    <path d="M 0 20 L 40 20" stroke="white" strokeWidth="0.5"/>
                    <path d="M 20 0 L 20 40" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-grid)"/>
                </svg>
                    {/* Scaled down decorative elements for mobile */}
                    <div className="absolute top-10 left-5 w-12 h-12 sm:top-20 sm:left-10 sm:w-16 sm:h-16 rounded-full border border-white/30"></div>
                    <div className="absolute bottom-10 right-5 w-16 h-16 sm:bottom-20 sm:right-10 sm:w-24 sm:h-24 rounded-full border border-white/20"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-t-4 border-r-4 border-white/10"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-b-4 border-l-4 border-white/10"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-0">
                {/* Main Heading - Responsive sizing */}
                <div className="uppercase bg-black px-4 py-6 sm:px-12 sm:py-12 font-work-sans font-extrabold text-white text-[28px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[54px] md:leading-[64px] max-w-4xl text-center my-3 sm:my-5">
                    Submit Your Startup
                </div>
            </div>     
        </div>

        <div>
            <StartupForm/>
            <Toaster/>
            
        </div>
    </div>
  )
}

export default page