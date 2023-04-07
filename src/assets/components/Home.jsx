import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../config/config';
import { useNavigate } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import Navbar from './Navbar';


const Home = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Home;