import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

const Posts = ({ posts }) => {
  
  return (
    <div id='outer div element'>
    {
      posts.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
        return (
          
          <div key={_id}>
          <Card variant="outlined">
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
           {
            isAuthor ? (
              <>
              <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
              <button variant='outline' onClick={() => deletePost(token, _id)}>Delete</button>
              </>
            ) : (
              <Link to={`/posts/${_id}`}>View</Link>
            )
          }
          </Card>
          </div>
        )
      })
    }
  </div>
  )
}

export default Posts;