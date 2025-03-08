import React from 'react'

export default async function Comments({commentsPromise}) {
    const comments = await commentsPromise

    return (
    <div className="mt-11">
        <h1>Comments</h1>
        <ul>
        {comments.map((comment) => {
            return (
            <li className="mb-5" key={comment.id}>
                {comment.body}
            </li>
            );
        })}
        </ul>
    </div>
  )
}
