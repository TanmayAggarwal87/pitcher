import { PLAYLIST_BY_SLUG_QUERY, STARTUP_BY_ID_QUERY } from '@/lib/query'
import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import React, { Suspense } from 'react'
import markdownit from "markdown-it";
import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/Views'
import Cards, { StartupTypeCard } from '@/components/Cards';
import { Card } from '@/components/ui/card';


export const experimental_ppr =true
const page = async({params}:{params:Promise<{id:string}>}) => {
    
    const md = markdownit();    
    const id = (await params).id
    const post = await client.fetch(STARTUP_BY_ID_QUERY,{id})
    const parsedContent = md.render(post?.pitch || "");
    const {select:editorPosts} = await client.fetch(PLAYLIST_BY_SLUG_QUERY ,{slug:"pitches-of-the-day"})
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

        <div className="w-full px-4 sm:px-6 md:px-10">
            <div className="max-w-screen-md mx-auto flex flex-wrap items-center justify-between my-6">
                {/* Left Side - Author Info */}
                <div className="flex items-center gap-4 min-w-0">
                    <div className="rounded-full shadow-xl overflow-hidden w-14 h-14">
                        <img
                        src={post?.author?.image}
                        alt="author"
                        className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="min-w-0">
                        <p className="font-semibold text-base sm:text-lg md:text-xl truncate">
                        {post?.author?.name}
                        </p>
                        <p className="font-medium text-sm sm:text-base text-gray-500 truncate">
                        @{post?.author?.username}
                        </p>
                    </div>
                </div>

                {/* Right Side - Category Badge */}
                <div className="mt-4 sm:mt-0">
                    <span className="bg-blue-100 text-black text-sm sm:text-base md:text-lg font-semibold px-4 py-2 rounded-2xl block text-center">
                        {post?.category}
                    </span>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto flex flex-wrap items-center my-6">
                <div className='flex flex-col'>
                    <div className='flex items-center gap-4 min-w-0 text-3xl font-bold my-5'>
                        <p>Pitch Details</p>
                    </div>

                    <div className='text-[18px] text-gray-800 my-2'>
                        {parsedContent ? (
                            <article
                            className="prose max-w-4xl font-work-sans break-all"
                            dangerouslySetInnerHTML={{ __html: parsedContent }}
                            />
                        ) : (
                            <p className="no-result">No details provided</p>
                        )}
                    </div>

                </div>
                
            </div>

        </div>
        <hr className="w-full border-t border-gray-500 my-6" />

        {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="font-semibold text-[30px] text-black">Editor Picks</p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-5">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <Cards key={i} post={post} />
              ))}
            </ul>
          </div>
        )}


        <Suspense fallback={<Skeleton className="bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3" />}>
            <View id = {id}/>
        </Suspense>
       
    </div>
  )
}

export default page