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
import {PopularityChart, RadarChart} from "./Charts";
import {SongListItem, ArtistListItem} from "./List"
const afterHash = window.location.hash.substring(1); //get hash value from page url
const hashes = afterHash.split("&").map(hash => hash.split("="))//split hash string into property, value pairs
const accessToken = hashes[0][1]

export function useFetch(url, dependencies = []){
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch(url, {
          method: "GET",
          headers: {
          "Authorization": "Bearer " + accessToken,
          }
        });
        let json = await res.json();
        setResponse(json);
        return json
      }
      catch(error){
        console.error(error);
      }
    };
    if(url && accessToken) {
      fetchData().then((res) => {
        if(!res) fetchData();
      });
    }
    return () => setResponse(null);
  }, dependencies);

  return response;
}

export function App() {
  const [timeRange, setTimeRange] = useState("medium_term");
  const handleClick = (event) => setTimeRange(event.target.id);
  const songs = useFetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`, [timeRange]);
  const artists = useFetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`, [timeRange]);

  if(!accessToken) return <Login />;
  else return (
    artists && songs ? (//if data has been recieved
      <Router basename="/Spotify-Data">
        <div style={{overflow: "hidden", textAlign: 'center', color: "white"}}>
          <Navbar/>
          <Switch>
            <Route exact path={["/"]} >
                <div className="timeRange">
                  <h1>Select a time range</h1>
                  <div style={{}}>
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
              <div style={{marginTop: "calc(80px + 1em)"}}>
                <h1 >Your Top {songs.items.length} Tracks Ranked By Popularity</h1>
                <PopularityChart data={songs.items}/>
                <h1 >Your Music Taste</h1>
                <RadarChart data={songs.items} accessToken={accessToken}/>
                <h1 style={{margin: '1em 0'}}>Your Top {songs.items.length} Songs In Order</h1>
                {songs.items.map((data, index) => <SongListItem song={data} key={data.id} rank={index+1}/>)}
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
              <Reccomendations songs={songs} artists={artists}/>
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

