import React, { useState } from 'react';
import { createPost } from '../api';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


const CreatePost = ({ token, fetchPosts, navigate }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState();

  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver: false

  }

  async function addPost() {

    const results = await createPost(token, newPost);
    if (results.success) {
      fetchPosts();
    } else {
      console.log('Error adding post');
    }
    navigate(`/posts`);

  }


  return (
    <>

      <form onSubmit={(event) => {
        event.preventDefault();
        addPost();
        navigate('/posts');
      }}>

        <h2>Create New Post</h2>
        <h3>Title: <input value={title} onChange={(event) => {
          setTitle(event.target.value);
        }}></input></h3>

        <h3>Description: <input value={description} onChange={(event) => {
          setDescription(event.target.value);
        }}></input></h3>

        <h3>Price: <input value={price} onChange={(event) => {
          setPrice(event.target.value);
        }}></input></h3>

        <h3>Location: <input value={location} onChange={(event) => {
          setLocation(event.target.value);
        }}></input></h3>

        <h3>Will you deliver? <input type='checkbox' onChange={() => {
          setWillDeliver(!willDeliver);
        }}></input></h3>

        <div className='create-post-button'>
        <Button variant='outlined' size='small' onClick={(event) => {
            event.preventDefault();
            addPost();
            fetchPosts();
            navigate('/posts');
          }}>Create a New Post</Button>
        </div>

      </form>

    </>
  )
}

export default CreatePost;