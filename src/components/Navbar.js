import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';

const Navbar = ({ logout, token }) => {
    return (
        <header>
            <AppBar position='static'
                style={{height: '2rem'}}>
            <nav id='main-nav-bar'>
                <Typography variant="h6">
                <Link to='/'>HOME</Link>
                <Link to='/posts'>POSTS</Link>
                <Link to='/profile'>PROFILE</Link>

                {token ? (
                    <Link to='/'
                        onClick={() => logout()}>LOGOUT</Link>
                ) : (
                    <>
                        <Link to='/register'>REGISTER</Link>
                        <Link to='/login'>LOGIN</Link>
                    </>
                )
                }
            </Typography>
            </nav>
        </AppBar>
        </header>
    )
}

export default Navbar;