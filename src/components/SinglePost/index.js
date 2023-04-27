import React from 'react'
import './index.css'
import styles from './single_post.module.css';

export default function SinglePost({singlePost}) {
    // console.log(singlePost.id)
  return (
    <div className={`single-post ${styles.card}`} >
      <h3>{singlePost.title}</h3>
      <h4>status - {singlePost.status}</h4>
    </div>

  )
}
