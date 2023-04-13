import Navbar from './Navbar';
import { useState, useEffect } from "react";
import Music from './Music';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Music />
        </div>
    )
}

export default Home