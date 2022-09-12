import React, { useState } from 'react';
import { loginUser } from '../api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = ({ setToken, navigate }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {

        const results = await loginUser(username, password);
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
        <div className='login'>
        <form onSubmit={(event) => {
            event.preventDefault()
            handleSubmit();
        }}>
            <TextField id="outlined-basic" label="Username" variant="outlined"
                type='text'
                onChange={(event) => setUsername(event.target.value)}
            />

            <TextField id="outlined-basic" label="Password" variant="outlined"
                type='password'
                onChange={(event) => setPassword(event.target.value)}
            />
<div className='login-button'>
            <Button variant='outlined' size='small' type='submit'>Submit</Button>
        </div>
        </form>
            </div>
            </>
    )
}

export default Login;