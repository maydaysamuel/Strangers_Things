import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost } from '../api';

const EditPost = () => {
    const [title, setTitle] = useState('');
    // do this for all states
    // set all parts of post to currentPost
    // set postid to useparams

    async function editPost() {
        const updatedPost = {
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver
        }
        await updatePost(token, updatedPost, _id)
    }

    return (
        <form>
            <input
             type='text'
             placeholder=''
             onChange={(event) => setTitle(event.target.value)}
             />
             <button type='submit'>Edit Post</button>
             {/* do this for all parts of post, checkbox for deliver, checked=willdeliver */}
        </form>
    )
}

export default EditPost;