import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick(){
        setIsClicked(!isClicked);
    }
    return (
        <header>
            <div className="logo" >Spotify Data</div>
            
            <div className="hamburger" id="hamburger" onClick={handleClick}>
                <div className={isClicked ? "line rotateLeft":"line"}></div>
                <div className={isClicked ? "line remove":"line"}></div>
                <div className={isClicked ? "line rotateRight":"line"}></div>
            </div>
    
            <nav>    
                <ul className={isClicked ? "list open":"list"} >
                    <li className="list-item" name="top songs">
                        <Link to="/" onClick={handleClick}>Top Songs</Link>
                    </li>
                    <li className="list-item" name="top artists">
                        <Link to="/topArtists" onClick={handleClick}>Top Artists</Link>
                    </li>
                    <li className="list-item" name="my account">
                        <Link to="/reccomendations" onClick={handleClick}>Reccomendations</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
