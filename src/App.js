import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
  const [timeRange, setTimeRange] = useState("medium_term");
  useEffect(() => {
    const afterHash = window.location.hash.substring(1); //get hash value
    const hashes = afterHash.split("&").map(hash => hash.split("="))//split hash string into property, value pairs
    setAccess_token(hashes[0][1]);
  }, [])
  
  useEffect(() => {
    setArtists(null);
    if(access_token){
      fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`, {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + access_token,
        }
      })
      .then(response => response.json())
      .then(json => {
        let temp = json.items.map((item, index) => item.rank = index + 1)
        console.log(temp, json);
        setSongs(json)
      });

      fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`, {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + access_token,
        }
      })
      .then(response => response.json())
      .then(json => {
        let temp = json.items.map((item, index) => item.rank = index + 1)
        console.log(temp, json);
        setArtists(json)
      });
      console.log("fetched")
    }
  }, [access_token, timeRange])

  function handleClick(event){
    //console.log(event)
    setTimeRange(event.target.id)
  }

  if(!access_token) return <Login />
  else return (
    artists && songs ? (//if data has been recieved
      <Router basename="Spotify-Data">
        <div style={{overflow: "hidden"}}>
          <Navbar/>
          <Switch>
          <Route exact path="/" >
              <div className="timeRange" style={{textAlign: 'center', color: "#fff", marginTop: "calc(80px + 1em)", width: '100vw', height: 'calc(100vh - (80px + 1em))'}}>
                <h1>Select a time range</h1>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <p>Based off of your streams from the past 4 weeks</p>
                  <Link id="short_term" onClick={handleClick} to="/topArtists">Short Term</Link>
                  <p>Based off of your streams from the past 6 months</p>
                  <Link id="medium_term" onClick={handleClick} to="/topArtists">Medium Term</Link>
                  <p>Based off of your all time streams, could be several years</p>
                  <Link id="long_term" onClick={handleClick} to="/topArtists">Long Term</Link>
                </div>
                
              </div>
            </Route>
            <Route exact path="/topSongs" >
              <div style={{textAlign: 'center', color: "#fff", marginTop: "calc(80px + 1em)"}}>
                <h1 >Your Top {songs.items.length} Tracks Ranked By Popularity</h1>
                <PopularityChart data={songs.items}/>
                <h1 style={{textAlign: 'center', margin: '1em 0'}}>Your Top {songs.items.length} Songs In Order</h1>
                <List data={songs.items} search="Tracks" accessToken={access_token}/>
              </div>
            </Route>
            <Route path="/topArtists">
              <div style={{textAlign: 'center', color: "#fff", marginTop: "calc(80px + 1em)"}}>
                <h1 >Your Top {artists.items.length} Artists Ranked By Popularity</h1>
                <PopularityChart data={artists.items}/>
                <h1 style={{textAlign: 'center', margin: '1em 0'}}>Your Top {artists.items.length} Artists In Order</h1>
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
    : (//else display loading page
      <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: 'center', justifyContent: "center", color: "white"}}>
        Loading...
      </div>
    )
    
  );
}

export default App;
