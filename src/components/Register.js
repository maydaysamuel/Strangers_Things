import React, { useState } from 'react';
import { registerUser } from '../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Register = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/profile');
        } else {
            console.log(results.error.message);
        }
    }

    return (
        <>
        <div>
            <h1 className='register-message'>Please register below:</h1>
        </div>
        <div className='register'>
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
            <TextField id="outlined-basic" label="Username" variant="outlined"
                onChange={(event) => setUsername(event.target.value)}
            />
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password'
                onChange={(event) => setPassword(event.target.value)}
            />
        
        <div className='register-button'>
            <Button variant='outlined' size='small' type='submit'>Submit</Button>
            </div>
            </form>
            </div>
        </>
    )
}

export default Register;