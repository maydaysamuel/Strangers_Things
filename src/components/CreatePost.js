import { Paper } from '@mui/material';
import React, { useState } from 'react';
import { navigate } from 'react-router-dom';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [willDeliver, setWillDeliver] = useState('')

  const newPost = {
    title: title,
    description: description,
    price: price, 
    location: location,
    willDeliver: willDeliver
  }
  
  async function addPost() {
    const result = await createPost(token, newPost)
    fetchPosts()
    navigate('/posts')
  }
  
  return (
    <>
    <Paper>
  <h4>Create New Post</h4>
  <h5>Title: </h5><input value={title} onChange={(event) => {
            setTitle(event.target.value);
          }}></input>
  <button onClick={() => addPost()}>Create a New Post</button>
  </Paper>
  </>
  )
}

export default CreatePost;