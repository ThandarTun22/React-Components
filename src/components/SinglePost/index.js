import React from 'react'
import './index.css'
import styles from './single_post.module.css';

export default function SinglePost({singlePost}) {
    // console.log(singlePost.id)
  return (
    <div className={`single-post ${styles.card}`} >{singlePost.title}</div>
  )
}
