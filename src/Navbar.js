import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {

    return (
        <>
            <nav>
                <div className="logo" >Spotify Data</div>
                <ul className="list" >
                    <li className="list-item" name="top songs">
                        <Link to="/topSongs" id="artistsLink">Top Songs</Link>
                    </li>
                    <li className="list-item" name="top artists">
                        <Link to="/topArtists">Top Artists</Link>
                    </li>
                    <li className="list-item" name="my account">
                        <Link to="/myAccount">My Account</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
