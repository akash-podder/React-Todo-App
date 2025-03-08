import { notFound } from "next/navigation";
import getPost from '@/lib/getPost'

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
