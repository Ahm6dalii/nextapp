import React from 'react'
import Link from 'next/link'

const Card = ({title,body,userId,id}) => {
  return (
    <div className=' bg-blue-400 p-4 flex flex-col gap-3'>
            <p>{userId}</p>
            <h1 className="font-bold">{title}</h1>
            <p  >{body}</p>
            <Link className="bg-red-600 p-3" href={`/posts/${id}`}> go details</Link>
        </div>
        
  )
}

export default Card