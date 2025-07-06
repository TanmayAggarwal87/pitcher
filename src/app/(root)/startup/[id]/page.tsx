import { STARTUP_BY_ID_QUERY } from '@/lib/query'
import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'


export const experimental_ppr =true
const page = async({params}:{params:Promise<{id:string}>}) => {

    const id = (await params).id
    const post = await client.fetch(STARTUP_BY_ID_QUERY,{id})
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

            <div className='bg-yellow-400 p-2 font-bold text-[20px] rounded px-6 '>
                {formatDate(post._createdAt)}

            </div>
            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-0">
                {/* Main Heading - Responsive sizing */}
                <div className="uppercase bg-black px-4 py-6 sm:px-12 sm:py-12 font-work-sans font-extrabold text-white text-[28px] leading-[38px] sm:text-[36px] sm:leading-[46px] md:text-[54px] md:leading-[64px] max-w-4xl text-center my-3 sm:my-5">
                {post.title}
                </div>

                {/* Subheading - Responsive sizing */}
                <div className="text-white mt-2 text-lg sm:text-xl md:text-2xl font-work-sans font-semibold text-center px-2">
                {post.description}
                </div>
            </div>

        
        </div>
        <div className='max-w-full px-8 py-6 rounded'>
            <img src={post.image} alt="image" className='h-auto w-screen rounded-xl'/>
        </div>

        <div>
            <div className='lft'>
                <div className='rounded-full'> 
                    <img src={post?.author?.image} height={60} width={60} alt='image' className='rounded-full'/>
                </div>
                <div>
                    <div>{post.author.name}</div>
                    <div>{post.author.username}</div>
                </div>
    
                
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default page