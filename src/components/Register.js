import React, { useState } from 'react';
import { registerUser } from '../api';
import { navigate } from 'react-router-dom';

const Register = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/profile');
            // ************ stay logged in? **********
        } else {
            console.log(results.error.message)
        }
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            handleSubmit();
        }}>
            <input
                type='text'
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                type='submit'>Submit</button>
        </form>
    )
}

export default Register;