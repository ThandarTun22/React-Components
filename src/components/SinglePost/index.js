import React from 'react'
import './index.css'

export default function SinglePost({singlePost}) {
    // console.log(singlePost.id)
  return (
    <div className="single-post" >{singlePost.title}</div>
  )
}
