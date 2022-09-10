import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost } from '../api';

const EditPost = ({ posts, token }) => {
  const { postID } = useParams();

  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
  
  async function editPost() {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    await updatePost(updatedPost)
  }

    return (
        <form onSubmit={ (event) => {
            event.preventDefault();
            editPost();
            
          }}>
            <h4>Edit Post</h4>
            <h5>Title: </h5>
            <input 
              type='text'
              placeholder={title}
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <h5>Description: </h5>
            <input 
              type='text'
              placeholder={description}
              onChange={(event) => setNewDesc(event.target.value)}
            />
            <h5>Location: </h5>
            <input 
              type='text'
              placeholder={location}
              onChange={(event) => setNewLocation(event.target.value)}
            />
            <h5>Price: </h5>
            <input 
              type='text'
              placeholder={price}
              onChange={(event) => setNewPrice(event.target.value)}
            />
            <h5>Delivery: </h5>
            <input 
              type='checkbox'
              checked={newWillDeliver}
              onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <button type='submit'>Edit Post</button>
          </form>
        )
}

export default EditPost;