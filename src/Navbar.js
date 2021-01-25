import React, {useState} from 'react';
import { useEffect } from 'react';
import {NavLink} from "react-router-dom";

export default function Navbar({children, setTimeRange}) {
    const [isClicked, setIsClicked] = useState(false);
    const toggleClick = () => setIsClicked(!isClicked);
    const setFalse = (e) => {
        setTimeRange(e.target.id);
        setIsClicked(false);
    }
    const scrollTop = (e) => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <header>
                <div className="hamburger" onClick={toggleClick}>
                    <div className={isClicked ? "line rotateLeft":"line"}></div>
                    <div className={isClicked ? "line remove":"line"}></div>
                    <div className={isClicked ? "line rotateRight":"line"}></div>
                </div>

                <a className="logo" href="#top">Spotify Data</a>
                
                <nav>    
                    <ul className={isClicked ? "list open" : "list"} >
                        <li><h1>Select Time Range</h1></li>
                        <li>
                            <p>Based off of your streams from the past 4 weeks</p>
                            <a id="short_term" onClick={setFalse} href="#top">Short Term</a>   
                        </li>
                        <li>
                            <p>Based off of your streams from the past 6 months</p>
                            <a id="medium_term" onClick={setFalse} href="#top">Medium Term</a>
                        </li>
                        <li>
                            <p>Based off of your all time streams, could be several years</p>
                            <a id="long_term" onClick={setFalse} href="#top">Long Term</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <footer>
                <ul>
                    <li className="list-item" name="top songs">
                        <NavLink to="/topSongs" onClick={scrollTop}>Top Songs</NavLink>
                    </li>
                    <li className="list-item" name="top artists">
                        <NavLink to="/topArtists" onClick={scrollTop}>Top Artists</NavLink>
                    </li>
                    <li className="list-item" name="reccomendations">
                        <NavLink to="/reccomendations" onClick={scrollTop}>For You</NavLink>
                    </li>
                </ul>
            </footer>

        </>
    )
}
