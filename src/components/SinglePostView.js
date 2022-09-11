import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api';

const SendMessage = ({ postID, token }) => {
  const [message, setMessage] = useState({content: ''});

  async function addMessage() {
      await createMessage({postID, token, message})
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      addMessage()
    }}>
      <input
        type='text'
        placeholder="Enter Message"
        onChange={(event) => setMessage({ content: event.target.value })}
      />
      <button type='submit' onClick={() => {
        addMessage();
      }}>Send Message</button>
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
        <p>Delivery: {willDeliver}</p>
        <>
          <button onClick={() => setActiveMessage(!activeMessage)}>Message this user</button>
          {
            activeMessage && <SendMessage token={token} postID={postID} />
          }
        </>
      </div>
    )

  }
}

export default SinglePostView;