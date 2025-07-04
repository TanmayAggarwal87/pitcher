import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Cards = () => {
    const posts = {
        _createdAt: "Yesterday",
        views:55,
        author: {id: 1},
        _id: 1,
        description: "This is a description",
        image:
        "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.036ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Robots",
        title: "We Robots"}
        
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2'>
        <Card className='max-w-[400px] h-[400px]'>
            <CardHeader>
                <Image src={posts.image} height={60} width={60} alt='image'/>
                <CardTitle>{posts.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    </div>
  )
}

export default Cards