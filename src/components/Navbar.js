import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';



const Navbar = ({ logout, token }) => {
    return (
        <header>
            <nav id='main-nav-bar'>
                <Link to='/'>HOME</Link>
                <Link to='/profile'>PROFILE</Link>
                <Link to='/posts'>POSTS</Link>

                {token ? (
                    <>
                    <Link to='/create-post'>Create Post</Link>
                    <Link to='/'
                        onClick={() => logout()}>LOGOUT</Link>
                        </>
                ) : (
                    <>
                        <Link to='/register'>REGISTER</Link>
                        <Link to='/login'>LOGIN</Link>
                    </>
                )
                }
            
            </nav>
        
        </header>
    )
}

export default Navbar;