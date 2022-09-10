import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost } from '../api';

const EditPost = () => {
    const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

    async function editPost() {
        const updatedPost = {
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
            _id: postID
        }
        await updatePost(token, updatedPost, _id)
    }

    return (
        <form onSubmit={ (event) => {
            event.preventDefault();
            editPost();
            
          }}>
            <input 
              type='text'
              placeholder={title}
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <input 
              type='text'
              placeholder={description}
              onChange={(event) => setNewDesc(event.target.value)}
            />
            <input 
              type='text'
              placeholder={location}
              onChange={(event) => setNewLocation(event.target.value)}
            />
            <input 
              type='text'
              placeholder={price}
              onChange={(event) => setNewPrice(event.target.value)}
            />
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