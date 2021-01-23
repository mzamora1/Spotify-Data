import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const toggleClick = () => setIsClicked(!isClicked);
    const setFalse = () => {
        window.scrollTo(0, 0)
        setIsClicked(false);
    }
    window.onbeforeunload = (e) => {
       window.location.href(window.location.origin)
    }
    return (
        <header>
            <a className="logo" href="#top">Spotify Data</a>
            
            <div className="hamburger" onClick={toggleClick}>
                <div className={isClicked ? "line rotateLeft":"line"}></div>
                <div className={isClicked ? "line remove":"line"}></div>
                <div className={isClicked ? "line rotateRight":"line"}></div>
            </div>
    
            <nav>    
                <ul className={isClicked ? "list open" : "list"} >
                    <li className="list-item" name="top songs">
                        <Link to="/topSongs" onClick={setFalse}>Top Songs</Link>
                    </li>
                    <li className="list-item" name="top artists">
                        <Link to="/topArtists" onClick={setFalse}>Top Artists</Link>
                    </li>
                    <li className="list-item" name="reccomendations">
                        <Link to="/reccomendations" onClick={setFalse}>Reccomendations</Link>
                    </li>
                    <li className="list-item" name="timeRange">
                        <Link to="/" onClick={setFalse}>Select Time Range</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
