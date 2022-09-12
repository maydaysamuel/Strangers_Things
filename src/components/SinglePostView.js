import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SendMessage = ({ postID, token }) => {
  const [message, setMessage] = useState({content: ''});

  async function addMessage() {
      await createMessage({postID, token, message})
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      addMessage();
    }}>
      <p><TextField id="outlined-basic" variant="outlined"
        onChange={(event) => setMessage({ content: event.target.value })}
      /></p>
      <Button variant='outlined' size='small' type='submit' onClick={() => {
        addMessage();
      }}>Send Message</Button>
    </form>
  )
}


const SinglePostView = ({posts, token}) => {

  const [activeMessage, setActiveMessage] = useState(false);
  const { postID } = useParams();
  const [currentPost] = posts.filter(post => post._id === postID);
  const { title, description, location, price, willDeliver } = currentPost;

  {
    return (
      <div>
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
        <>
          <Button variant='outlined' size='small' onClick={() => setActiveMessage(!activeMessage)}>Message this user</Button><br /><br />
          {
            activeMessage && <SendMessage token={token} postID={postID} />
          }
        </>
      </div>
    )

  }
}

export default SinglePostView;