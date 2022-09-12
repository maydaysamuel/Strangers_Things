import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, token }) => {

    const linkStyle = {
        margin: '1rem',
        textDecoration: 'none',
        color: 'white'
      };

    return (
        <header>
            <nav>
                <Link to='/' style={linkStyle}>HOME</Link>
                <Link to='/profile' style={linkStyle}>PROFILE</Link>
                <Link to='/posts' style={linkStyle}>POSTS</Link>

                {token ? (
                    <>
                        <Link to='/create-post' style={linkStyle}>CREATE POST</Link>
                        <Link to='/'
                            style={linkStyle}
                            onClick={() => logout()}>LOGOUT</Link>
                    </>
                ) : (
                    <>
                        <Link to='/register' style={linkStyle}>REGISTER</Link>
                        <Link to='/login' style={linkStyle}>LOGIN</Link>
                    </>
                )
                }

            </nav>

        </header>
    )
}

export default Navbar;