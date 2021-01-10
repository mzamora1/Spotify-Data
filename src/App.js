import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import './App.css';
import {PopularityChart, RadarChart} from "./Charts";
import {SongListItem, ArtistListItem} from "./List"
import {accessToken, useFetch} from './fetch';

export function App() {
  const [timeRange, setTimeRange] = useState("medium_term");
  const [isPlaying, setIsPlaying] = useState(true);
  const songs = useFetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`, [timeRange]);
  const artists = useFetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`, [timeRange]);
  const ids = [];
  for(let i = 0; songs && i < 5; i++){
    ids.push(songs.items[i].id)
  }
  const reccomendations = useFetch(songs && "https://api.spotify.com/v1/recommendations?seed_tracks=" + String(ids), [songs])
  
  if(!accessToken) return <Login />;
  else return (
    artists && songs && reccomendations ? (//if data has been recieved
      <Router basename="/Spotify-Data">
        <div style={{overflow: "hidden", textAlign: 'center', color: "white"}}>
          <Navbar/>
          <Switch>
            <Route exact path={["/"]} >
                <div className="timeRange">
                  <h1>Select a time range</h1>
                  <div style={{}}>
                    <p>Based off of your streams from the past 4 weeks</p>
                    <Link id="short_term" onClick={(event) => setTimeRange(event.target.id)} to="/topArtists">Short Term</Link>
                    <p>Based off of your streams from the past 6 months</p>
                    <Link id="medium_term" onClick={(event) => setTimeRange(event.target.id)} to="/topArtists">Medium Term</Link>
                    <p>Based off of your all time streams, could be several years</p>
                    <Link id="long_term" onClick={(event) => setTimeRange(event.target.id)} to="/topArtists">Long Term</Link>
                  </div>
                  
                </div>
            </Route>
            <Route exact path="/topSongs" >
                <div style={{marginTop: "calc(80px + 1em)"}}>
                  <h1 >Your Top {songs.items.length} Tracks Ranked By Popularity</h1>
                  <PopularityChart data={songs.items}/>
                  <h1 >Your Music Taste</h1>
                  <RadarChart data={songs.items}/>
                  <h1 style={{margin: '1em 0'}}>Your Top {songs.items.length} Songs In Order</h1>
                  <div onClick={() => setIsPlaying(!isPlaying)}>
                    {songs.items.map((data, index) => <SongListItem song={data} key={data.id} rank={index+1} globalPlaying={isPlaying}/>)}
                  </div>
                </div>
            </Route>
            <Route path="/topArtists">
                <div style={{marginTop: "calc(80px + 1em)"}}>
                  <h1 >Your Top {artists.items.length} Artists Ranked By Popularity</h1>
                  <PopularityChart data={artists.items}/>
                  <h1 style={{margin: '1em 0'}}>Your Top {artists.items.length} Artists In Order</h1>
                  {artists.items.map((data, index) => <ArtistListItem artist={data} key={data.id} rank={index+1}/>)}
                </div>
            </Route>
            <Route path="/reccomendations">
                <div style={{marginTop: "calc(80px + 1em)"}}>
                  <h1 style={{margin: "1em 0"}}>Songs you might like</h1>
                  <h3 style={{marginBottom: "1em"}}>Based on your top 5 songs</h3>
                  <div onClick={() => setIsPlaying(!isPlaying)}>
                    {reccomendations.tracks.map((data) => <SongListItem song={data} key={data.id} globalPlaying={isPlaying}/>)}
                  </div>
                </div>
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

