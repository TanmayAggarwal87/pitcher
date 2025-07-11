import Image from 'next/image'
import React from 'react'
import { cn,formatDate } from '@/lib/utils'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { auth } from '../../auth'
import { Author ,Startup} from '@/sanity/types'
import { Skeleton } from './ui/skeleton'


export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const Cards = ( {post}:{post:StartupTypeCard}) => {
    const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

        
  return (
    <div className='mx-5 my-3 '>
        <div className="max-w-[400px] object-cover rounded-lg overflow-hidden shadow-lg bg-white font-sans border-3 border-black hover:bg-blue-100 transition-all duration-500">
        {/* Image at the top */}
        <div className="h-48 max-h-[300px] flex items-center justify-center bg-gray-200 overflow-hidden">
            <Link href={`/startup/${_id}`}>
                <img 
                src={image} 
                alt="image" 
                className="h-full w-full object-contain" 
                />
            </Link>
        </div>

            

            
            
            {/* Content area */}
            <div className="p-6 mt-6">
                <div  className='flex justify-between items-center flex-row text-xl font-semibold font-work-sans my-2  mb-3'>
                    <div className=' '>{formatDate(_createdAt)}</div>
                    <div  className='flex justify-center items-center flex-row gap-1'>
                        <Eye className='size-6 text-blue-600'/>
                        <p>{views}</p>
                    </div>
                    
                </div>

                <div className='flex justify-between items-center flex-row mt-4'>
                    <div className='flex justify-start items-start flex-col gap-2'>
                        <Link href={`user/${author?._id}`}><div className='text-lg font-semibold opacity-88  '>{author?.name}</div></Link>
                        
                        <Link href={`/startup/${_id}`}><div className="text-3xl font-bold text-gray-800 mb-4">{title}</div></Link>
                    
                    </div>
                    <div className='relative -top-6'>
                        <Link href={`user/${author?._id}`}><div><img src={author?.image} height={50} width={50} className='rounded-full'/></div></Link>
                    </div>
                    
                </div>
                
                
                <Link href={`/startup/${_id}`}>
                    <p className="text-gray-600 italic mb-6 line-clamp-2">
                        {description}
                    </p>
                </Link>
                
                <div className='flex justify-between items-center flex-row'>
                    <Link href={`/?query=${category?.toLowerCase()}`}>
                        <div className='bg-white text-black border-1 border-black font-bold text-lg p-2 rounded'>
                            <span>{category}</span>
                        </div>
                    </Link>
                    
                    <div>
                        <Link href ={`/startup/${_id}`}>
                            <button className="w-full cursor-pointer bg-black text-white font-semibold py-2 px-4 rounded transition duration-200">
                                Details
                            </button>
                        </Link>
                        
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>
  )

}

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);


export default Cards