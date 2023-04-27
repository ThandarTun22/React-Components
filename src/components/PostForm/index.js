import React, { useState } from 'react'
import './index.css';

export default function Index({addPost}) {

   let [title, setTitle] =  useState("")

   let resetForm = () => {
    setTitle('')
    console.log("updated successfully")
   }

   let uploae_post = (e) => {
    e.preventDefault(); // prevent refreshing page
    let post = {
      id :Math.floor(Math.random()*10000),
      title : title
    }
    resetForm()
    addPost(post);
   }

  return (
    <form className='post-form' onSubmit={uploae_post}>
        <h1>Create Post</h1>
        <div className="form-control">
            <label htmlFor="">Title</label>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
        </div>
        {/* <p>{title}</p> */}
        {/* <button type='button' onClick={resetForm}>reset form</button> */}
        <div className="form-control">
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
