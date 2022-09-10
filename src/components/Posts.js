import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';

const Posts = ({ token, posts }) => {
  
  return (
    <div id='outer div element'>
    {
      posts.map((post) => {
        const {title, description, price, location, willDeliver, _id, isAuthor } = post;
        return (
          
          <div key={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            <p>Delivery: {willDeliver}</p>
           {
            isAuthor ? (
              <>
              <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
              <button variant='outline' onClick={(event) => {
                event.preventDefault();
                deletePost(_id, token)
              }}>Delete</button>
              </>
            ) : (
              <Link to={`/posts/${_id}`}>View</Link>
            )
          }
          </div>
        )
      })
    }
  </div>
  )
}

export default Posts;