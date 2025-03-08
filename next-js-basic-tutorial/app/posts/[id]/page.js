import { notFound } from "next/navigation";
import getPost from '@/lib/getPost'

// this "generateMetadata" Function is for Generating "Dynamic Metadata"
export async function generateMetadata({params}) {
  
  const {id} = await params;
  const post = await getPost(id); // here in this Page, "getPost(id)" API won't be called TWICE, because "Next.js" can Recognize "Duplicate" Api calls... also, here "fetch()" function is Overriden by "Next.js" to Stop "Duplicate" API Calls

  return {
    title: post.title,
    description: post.body,
  }
}

export default async function Post({params}) {
  
  const {id} = await params;

  if(id==-1){
    notFound()
  }

  const post = await getPost(id);
  console.log(post)

    return (
      <div className="mt-6">
        <h1 className="text-blue-500">Title: {post.title}</h1>
        
        <div className="mt-11">Description: {post.body}</div>
      </div>
    )
}
