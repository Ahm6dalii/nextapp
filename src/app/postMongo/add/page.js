import clientConnect from "@/lib/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const AddPost = () => {
  // const create = async (formData) => {
    // "use server";
    // const title = formData.get("title");
    // const content = formData.get("content");
    // const client = await clientConnect;
    // const db = client.db();
    // await db
    //   .collection("note")
    //   .insertOne({ title, content,  image_url: "https://th.bing.com/th/id/R.153e37ca8c8ee9ace6cc6389034c5cae?rik=48TIDeyzMecQ4A&pid=ImgRaw&r=0",
    //   });
    // revalidatePath("/posts");
    // redirect("/lib/mongodb");
  // };

  return 
    // <form className='flex flex-col gap-2 border rounder bg-red-100 p-3' action={create}>
    //   <div className='flex  gap-5'>
    //     <label htmlFor="title">Title:</label>
    //     <input className='w-full p-2' type="text" name="title" id="title" />
    //   </div>
    //   <div className='flex   gap-2 '>
    //     <label htmlFor="content">content:</label>
    //     <textarea
    //       className=''
    //       type="text"
    //       name="content"
    //       id="content"
    //       placeholer="Enter post content"
    //     />
    //   </div>
     
    //   <button className='bg-green-200 p-3 rounded transion hover:bg-green-600'>Submit</button>
    // </form>
  // );
  
};

export default AddPost;
