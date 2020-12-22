import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Reccomendations from "./Reccomendations";
import './App.css';
import PopularityChart from "./PopularityChart";
import List from "./List"

function App() {
  const [access_token, setAccess_token] = useState("");
  const [songs, setSongs] = useState(null);
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    const afterHash = window.location.hash.substring(1); //get hash value
    const hashes = afterHash.split("&").map(hash => hash.split("="))//split hash string into property, value pairs
    setAccess_token(hashes[0][1]);
  }, [])
  

  useEffect(() => {
    if(access_token){
      fetch("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term", {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + access_token,
        }
      })
      .then(response => response.json())
      .then(json => setSongs(json));

      fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term", {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + access_token,
        }
      })
      .then(response => response.json())
      .then(json => setArtists(json));
    }
  }, [access_token])

  
  return (
    artists && songs ? (//if data has been recieved
      <Router basename="Spotify-Data">
        {console.log(songs, artists)}
        {console.log("set Access token to: " + access_token)}
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" >
              <div style={{textAlign: 'center', color: "#fff", marginTop: "calc(80px + 1em)"}}>
                <h1 >Your Top {songs.items.length} Tracks Ranked By Popularity</h1>
                <PopularityChart data={songs.items}/>
                <h1 style={{textAlign: 'center', margin: '1em 0'}}>Your Top {songs.length} Songs In Order</h1>
                <List data={songs.items} search="Tracks" accessToken={access_token}/>
              </div>
            </Route>
            <Route path="/topArtists">
              <div style={{textAlign: 'center', color: "#fff", marginTop: "calc(80px + 1em)"}}>
                <h1 >Your Top {artists.items.length} Artists Ranked By Popularity</h1>
                <PopularityChart data={artists.items}/>
                <h1 style={{textAlign: 'center', margin: '1em 0'}}>Your Top {artists.length} Artists In Order</h1>
                <List data={artists.items} search="Artists" accessToken={access_token}/>
              </div>
            </Route>
            <Route path="/reccomendations">
              <Reccomendations songs={songs} artists={artists} accessToken={access_token}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
    : (//else display login page
      <Login />
    )
    
  );
}

export default App;
