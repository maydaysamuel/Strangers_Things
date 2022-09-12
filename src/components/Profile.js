import React from 'react'
import { Paper } from '@mui/material';

const Profile = ({ user }) => {
    const messages = user.messages;
    const userID = user._id;
   
    return (
      <div>
        <div>
        <Paper>
          <h1 className='inbox'>Inbox</h1>

          {
            messages && messages.map(message => {
              const fromUserID = message.fromUser._id;
              const {username} = message.fromUser;
              const {title} = message.post;
              
              if (userID !== fromUserID) {
                return (
                  <div className='inbox-message'>
                  <div key={message._id}>
                    <p>From User: {username} </p>
                    <p>Message: {message.content}</p>
                    <p>Post Reference: {title}</p>
                  </div>
                  </div>
                )
              }
            })    
          }
          </Paper>
        </div>
        <div>
        <Paper>
          <h1 className='sent'>Sent</h1>
          {
            messages && messages.map(message => {
              const fromUserID = message.fromUser._id;
              const {title} = message.post;
              
              if (userID === fromUserID) {
                return (
                  <div className='sent-message'>
                  <div key={message._id}>
                    <p><strong>Post Title:</strong> {title}</p>
                    <p><strong>Message:</strong> {message.content}</p>
                    </div>
                    </div>
                )
              }
            })    
          }
          </Paper>
        </div>
      </div>
    )
  }
  
  export default Profile;