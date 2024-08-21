import React from "react";
import Card from "@/components/Card";

const Post = async () => {
    const postsJson = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
    
      const posts = await postsJson.json();
      console.log(posts)
  return <>
<div className='grid grid-cols-4 gap-4'>
{posts.map((item) => (
<Card
          key={item.id}
          title={item.title}
          body={item.body}
          userId={item.userId}
          id={item.id}
        />

        

      ))}

</div>

  </>
};

export default Post;
