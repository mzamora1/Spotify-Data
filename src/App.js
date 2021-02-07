import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// import Navbar from "./Navbar";
// import Login from "./Login";
// import {PopularityChart, RadarChart, BasicMeter} from "./Charts";
// import {SongList, ArtistListItem} from "./List"
import {accessToken, useFetch} from './components/hooks/useFetch';

import Login from './pages/login';
import TopArtists from './pages/topArtists';
import TopSongs from './pages/topSongs';
import Reccomendations from './pages/reccomendations';
import Navbar from './components/navbar'

export function App() {
  const [timeRange, setTimeRange] = useState("medium_term");
  const artists = useFetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`, [timeRange]);
  const songs = useFetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`, [timeRange]);
  const ids = [];
  for(let i = 0; songs && i < 5; i++){
    ids.push(songs.items[i].id)
  }
  const reccomendations = useFetch(songs && "https://api.spotify.com/v1/recommendations?seed_tracks=" + String(ids), [songs]);
  const audioFeatures = useFetch(songs && "https://api.spotify.com/v1/audio-features?ids=" + String(songs.items.map(song => song.id)), [songs]);
  
  if(!accessToken) return <Login />;
  else return (
    artists && songs && reccomendations && audioFeatures ? (//if data has been recieved
      <Router basename="/Spotify-Data">
        <div style={{overflow: "hidden", textAlign: 'center', color: "white"}}>
          <Navbar setTimeRange={setTimeRange}/>
          <Switch>
            <Route exact path="/topSongs" >
                <TopSongs songs={songs} audioFeatures={audioFeatures} />
            </Route>
            <Route exact path={["/", "/topArtists"]}>
                <TopArtists artists={artists} />
            </Route>
            <Route path="/reccomendations">
                <Reccomendations reccomendations={reccomendations} audioFeatures={audioFeatures} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
    : (//else display loading page
      <div className="loading">
        Loading...
      </div>
    )
  );
}

