import React from 'react'
import Link from "next/link";
import getAllPosts from '@/lib/getAllPosts'

export default async function Posts() {

    const posts = await getAllPosts();

    return (
    <div>
        <h1>All Posts</h1>
        
        <ul>
        {posts.map((post) => {
          
          return (
            <li className="mb-5" key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );

        })}

      </ul>

    </div>
  )
}