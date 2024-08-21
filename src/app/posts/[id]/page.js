
// "use client"
// import React from "react";
// import Card from "@/components/Card";
// import { useRouter } from 'next/navigation';


// const Post = async({ params }) => {
//   const paras = parseInt(params.id)
//     const router = useRouter()
//   const postsJson = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );

//   const posts = await postsJson.json();
//   return <>
//   <div className='flex flex-col gap-2'>

// <Card
//           key={posts.id}
//           title={posts.title}
//           body={posts.body}
//           userId={posts.userId}
//           id={posts.id}
//         />
//         <div>
//         <button className="bg-red-400 p-3  rounded" onClick={() => router.replace(`/posts/${paras + 1}`)}>next</button>
//         <button className="bg-red-800 p-3  rounded ms-3"  onClick={() => router.replace(`/posts/${paras - 1}`)}>previous</button>

//         </div>
        


        

    
// </div>
//   </>;
// };

// export default Post;
