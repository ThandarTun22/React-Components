import React from 'react'
import './index.css'
import SinglePost from '../SinglePost/index'

export default function PostsList({posts}) {
  // console.log(posts)
  return (
    <div className="postList">
      {posts.map(post => (
        <SinglePost key={post.id} singlePost={post}> </SinglePost>
      ))}
  </div>
  )
}
