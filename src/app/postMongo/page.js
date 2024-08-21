import { MongoClient } from 'mongodb'
import React from 'react'
import CardImg from "@/components/CardImage";

const page = async() => {
    // const mongoClient= new MongoClient("mongodb://localhost:27017/lab2");
    // const client =await mongoClient.connect();
    // const db=client.db();
    // const news =await db.collection("note").find({}).toArray();
    // console.log(news);
    
  return (<>
 {/* <div className='grid grid-cols-4 gap-4'>
{news.map((item) => (
<CardImg
          key={item.id}
          title={item.title}
         content={item.content}
         image={item.image_url}
          id={item.id}
        />
      ))}

</div> */}
</>)
  
}

export default page