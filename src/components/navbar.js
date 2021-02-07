import {useState} from 'react';
import {NavLink, Link} from "react-router-dom";
import ham from './hamburger.module.css'
import header from './header.module.css'
import footer from './footer.module.css'

export default function Navbar({children, setTimeRange}) {
    const [isClicked, setIsClicked] = useState(false);
    const toggleClick = () => setIsClicked(!isClicked);
    const scrollTop = (e) => {
        window.scrollTo(0, 0);
    }
    const setFalse = (e) => {
        scrollTop();
        setTimeRange(e.target.id);
        setIsClicked(false);
    }

    return (
        <>
            <header className={header.header}>
                <div className={ham.hamburger} onClick={toggleClick}>
                    <div className={isClicked ? `${ham.line} ${ham.rLeft}`: ham.line}></div>
                    <div className={isClicked ? `${ham.line} ${ham.remove}`: ham.line}></div>
                    <div className={isClicked ? `${ham.line} ${ham.rRight}`: ham.line}></div>
                </div>

                <a className={header.logo} href="#top">Spotify Data</a>
                
                <nav className={isClicked ? `${header.list} ${header.open}` : header.list}>    
                  
                    <ul>
                        <h1>Select Time Range</h1>
                        <li>
                            <p>Based off of your streams from the past 4 weeks</p>
                            <Link id="short_term" onClick={setFalse} to="/topArtists">Short Term</Link>   
                        </li>
                        <li>
                            <p>Based off of your streams from the past 6 months</p>
                            <Link id="medium_term" onClick={setFalse} to="/topArtists">Medium Term</Link>
                        </li>
                        <li>
                            <p>Based off of your all time streams, could be several years</p>
                            <Link id="long_term" onClick={setFalse} to="/topArtists">Long Term</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <footer className={footer.footer}>
                <ul>
                    <li>
                        <NavLink to="/topSongs" onClick={scrollTop} activeClassName={footer.active}>Top Songs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topArtists" onClick={scrollTop} activeClassName={footer.active}>Top Artists</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reccomendations" onClick={scrollTop} activeClassName={footer.active}>For You</NavLink>
                    </li>
                </ul>
            </footer>

        </>
    )
}