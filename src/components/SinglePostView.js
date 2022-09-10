import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api'

const SinglePostView = ({ posts, token }) => {
    const [activateMessage, setActivateMessage] = useState(false);
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
                <button onClick={() => setActivateMessage(!activateMessage)}>Message this user</button>
                {
                    activateMessage && <SendMessage postID={postID} token={token} />
                }
            </div>
        )

    }
}

export default SinglePostView;