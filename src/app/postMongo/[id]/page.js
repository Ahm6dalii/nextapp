// "use client"
import { MongoClient } from 'mongodb'
import React from 'react'
import CardImg from "@/components/CardImage";
// import { useRouter } from 'next/navigation';

const page = async({params}) => {
    console.log(params);
    
    // const paras = parseInt(params.id)
    // const router = useRouter()
    
    const mongoClient= new MongoClient("mongodb://localhost:27017/lab2");
    const client =await mongoClient.connect();
    const db=client.db();
    const news =await db.collection("note").find({}).toArray();
    const myNews=news.filter(item=>item.id==params.id)
    console.log(myNews,'ss');
    
  return (<>
 <div className='grid grid-cols-4 gap-4'>

{myNews&&<CardImg
          key={myNews[0]?.id}
          title={myNews[0]?.title}
         content={myNews[0]?.content}
         image={myNews[0]?.image_url}
          id={myNews[0]?.id}
        />}
        {/* <button onClick={() => router.replace(`/lib/mongodb/${paras + 1}`)}>next</button>
        <button onClick={() => router.replace(`/lib/mongodb/${paras - 1}`)}>previous</button> */}

</div>
</>)
}

export default  page