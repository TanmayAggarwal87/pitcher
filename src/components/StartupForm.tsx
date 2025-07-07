"use client"

import React, { useActionState, useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor';
import { Loader2, Send } from 'lucide-react';
import { formSchema } from '@/lib/validation';
import { toast } from 'react-hot-toast';
import {z} from "zod"
import { useRouter } from 'next/navigation';
import { createPitch } from '@/lib/actions';



const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string,string>>({})
    const [pitch,setPitch] =useState("");
    const router = useRouter()
    const handleFormSubmit=async(prevState: any, formData: FormData)=>{
      try {
        
        const formValues ={
          title: formData.get("title") as string,
          description: formData.get("description") as string,
          category: formData.get("category") as string,
          link: formData.get("link") as string,
          pitch,
        }

        await formSchema.parseAsync(formValues);
        const result = await createPitch(prevState,formData,pitch)

        if(result.status=="SUCCESS"){
          toast.success("Your startup pitch is created successfully")
          router.push(`/startup/${result._id}`);
        }
        return result;
      } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

        toast.error("Please check your inputs and try again");

        return { ...prevState, error: "Validation failed", status: "ERROR" }
      
    }}}
    const [state ,formAction,isPending] = useActionState(handleFormSubmit, {error:"",status:"INITIAL"})
    
  return (
    <div>
        <form action={formAction} className=' max-w-2xl mx-auto bg-white my-10 space-y-8 px-6;'>

            <label htmlFor='title' className='font-semibold text-[22px] text-black uppercase'>Title</label>
            <Input id='title' name='title' placeholder='Startup Title' required className='border-[1px] border-black px-5 py-7 text-[24px] text-black font-semibold rounded-xl mt-3 '/>
            {errors.title && <p className=' text-red-500 mt-2 ml-5'>{errors.title}</p> }

            <label htmlFor='description' className='font-semibold text-[22px] text-black uppercase'>Description</label>
            <Textarea id='description' required placeholder='Startup Description' name='description' className='border-[1px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-xl mt-3 placeholder:text-black-300'/>
            {errors.description && <p className=' text-red-500 mt-2 ml-5'>{errors.description}</p> }

            <label htmlFor='category' className='font-semibold text-[22px] text-black uppercase'>category</label>
            <Input id='category' name='category' placeholder='Startup Category (Tech , Health , Education...)' required className='border-[1px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-xl mt-3 placeholder:text-black-300'/>
            {errors.category && <p className=' text-red-500 mt-2 ml-5'>{errors.category}</p> }

            <label htmlFor='link' className='font-semibold text-[22px] text-black uppercase'>Image URL</label>
            <Input id='link' name='link' placeholder='Enter Image URL' required className='border-[1px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-xl mt-3 placeholder:text-black-300'/>
            {errors.link && <p className=' text-red-500 mt-2 ml-5'>{errors.link}</p> }

            <div data-color-mode ="light ">
              <label htmlFor='pitch' className='font-semibold text-[22px] text-black uppercase'>Pitch</label>
              <MDEditor value={pitch}
                onChange={(value) => setPitch(value as string)}
                id="pitch"
                preview="edit"
                height={300}
                style={{ borderRadius: 20, overflow: "hidden" }}
                textareaProps={{
                  placeholder:
                    "Briefly describe your idea and what problem it solves",
                }}
                previewOptions={{
                  disallowedElements: ["style"],
                }} className='border-[1px] border-black'  />
              {errors.pitch && <p className=' text-red-500 mt-2 ml-5'>{errors.pitch}</p> }
            </div>
            
            <div>
              <button type='submit' disabled={isPending} className='border-[1px] border-black flex items-center justify-center gap-2 w-full bg-blue-500 px-6 py-2 rounded-xl text-[20px] cursor-pointer text-white hover:bg-blue-700 transition-all duration-500'>
                {isPending?<span className='flex items-center justify-center gap-2'> Submitting <Loader2 className='animate-spin'/></span> : <span className='flex items-center justify-center gap-2'> Submit Yout Pitch <Send /></span> }
                
               </button>
              
            </div>
            
        </form>

    </div>
  )
}

export default StartupForm