import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [willDeliver, setWillDeliver] = useState()

  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver: false

  }

  async function addPost() {
    const results = await createPost(token, newPost)
    if (results.success) {
      fetchPosts();
    } else {
      console.log('error adding post')
    }
    navigate(`/posts`)
  }

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        addPost();
      }}>
        <h4>Create New Post</h4>
        <h5>Title: </h5><input value={title} onChange={(event) => {
          setTitle(event.target.value);
        }}></input>
        <h5>Description: </h5><input value={description} onChange={(event) => {
          setDescription(event.target.value);
        }}></input>
        <h5>Price: </h5><input value={price} onChange={(event) => {
          setPrice(event.target.value);
        }}></input>
        <h5>Location: </h5><input value={location} onChange={(event) => {
          setLocation(event.target.value);
        }}></input>
        <h5>Delivery: <input type='checkbox' onChange={() => {
          setWillDeliver(!willDeliver);
        }}></input></h5>
      <button onClick={(event) => {
        event.preventDefault();
        addPost();
        fetchPosts();
        navigate('/posts')
      }}>Create a New Post</button>
    </form>
    </>
  )
}

export default CreatePost;