import './style.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import {
    Navbar,
    Posts,
    Profile,
    Home,
    Register,
    Login
} from './components'
import {
    getPosts,
    getUserDetails
} from './api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    console.log(token, user)

    function logout() {
        window.localStorage.removeItem('token');
        setToken('');
        setUser({});
    }

    async function fetchPosts() {
        const results = await getPosts(token)
        setPosts(results.data.posts);
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token');
        if(!token) {
            if(storedToken) {
            setToken(storedToken);
            }
            return;
        }

        const results = await getUserDetails(token);
        if(results.success) {
             setUser(results.data);
        } else {
            console.log(results.error.message);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [token])

    useEffect(() => {
        getMe();
    }, [token])

    return (
        <div>
            <Navbar logout={ logout }/>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/posts' element={<Posts posts={ posts } />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/register'
                    element={<Register
                        setToken={ setToken }
                        token={ token }
                        navigate={ navigate }
                    />}
                />
                <Route path='/login'
                    element={ <Login
                        setToken={ setToken }
                        navigate={ navigate }
                    />}
                />
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

/* COMPONENTS WE WILL NEED:
- Login
- Registration
- Posts
- Profile
- Navigation
- Add a post
*/