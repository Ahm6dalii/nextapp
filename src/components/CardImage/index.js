import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CardImg = ({title,content,id,image}) => {
    console.log(image);
    
  return (
    <div className=' bg-blue-400 p-4 flex flex-col gap-3'>
            <h1 className="font-bold">{title}</h1>
            <h1 className="font-bold">{content}</h1>
            <Image
        src={image}// Path to your image
      
        width={500} // Desired width
        height={300} // Desired height
      />
            <Link className="bg-red-600 p-3" href={`postMongo/${id}`}> go details</Link>
        </div>
        
  )
}

export default CardImg