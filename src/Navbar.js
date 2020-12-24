import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => setIsClicked(!isClicked);
    return (
        <header>
            <a className="logo" href="#top">Spotify Data</a>
            
            <div className="hamburger" onClick={handleClick}>
                <div className={isClicked ? "line rotateLeft":"line"}></div>
                <div className={isClicked ? "line remove":"line"}></div>
                <div className={isClicked ? "line rotateRight":"line"}></div>
            </div>
    
            <nav>    
                <ul className={isClicked ? "list open" : "list"} >
                    <li className="list-item" name="top songs">
                        <Link to="/topSongs" onClick={handleClick}>Top Songs</Link>
                    </li>
                    <li className="list-item" name="top artists">
                        <Link to="/topArtists" onClick={handleClick}>Top Artists</Link>
                    </li>
                    <li className="list-item" name="reccomendations">
                        <Link to="/reccomendations" onClick={handleClick}>Reccomendations</Link>
                    </li>
                    <li className="list-item" name="timeRange">
                        <Link to="/" onClick={handleClick}>Select Time Range</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
