import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';


const Posts = ({ posts, token }) => {

  const buttonStyle = {
    textDecoration: 'none',
  }

  const [searchTerm, setSearchTerm] = useState('');
  function postMatches(post, string) {
      const { title, description } = post;
      if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
          return post;
      }
  }
  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
      <div>
      <div className='search-form'>
          <form onSubmit={(event) => {
              event.preventDefault();
          }}>
            <TextField
          id="filled-search"
          label="Search posts"
          type="search"
          variant="filled"
             onChange={(event) => setSearchTerm(event.target.value)}
            />
           </form>
          </div>
      <div>
      
      
      {
         postsToDisplay.map((post) => {
             const {description, location, price, title, willDeliver, _id, isAuthor} = post;
           return (
               <div className='post-desc' key={_id} >
           <h3>{title}</h3>
           <p>Description: {description}</p>
           <p>Price: {price}</p>
           <p>Location: {location}</p>
           {
            willDeliver ? (
              <p>Delivery: Yes</p>
            ) : (
              <p>Delivery: No</p>
            )

           }
           {  
               isAuthor ? (
                  <div>
                  <Button variant='outlined' size='small'><Link style={buttonStyle} to={`/posts/edit-post/${_id}`}>Edit</Link></Button>
                  <Button variant='outlined' size='small' onClick={(event) => {
                event.preventDefault();
                deletePost(_id, token)
               }}>Delete</Button>
                  </div>
               ) :(<div> <Button variant='outlined' size='small'><Link style={buttonStyle} to={`/posts/${_id}`}>View</Link></Button>
                    </div>
               )
           }
           </div>
           )
         })
      }
      </div>
      </div>
  )
}
export default Posts;