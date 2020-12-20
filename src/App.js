import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import TopUserItems from "./TopUserItems";
import Reccomendations from "./Reccomendations";
import './App.css';


function App() {
  const [access_token, setAccess_token] = useState("")
  useEffect(() => {
    const afterHash = window.location.hash.substring(1); //get hash value
    if(!afterHash.includes("access_token")){//if there is not an access token in hash then redirect to login page
        //window.location.href = "https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=https://mzamora1.github.io/spotify.html&scope=user-top-read&response_type=token";
        //window.location.href = "https://accounts.spotify.com/authorize?client_id=b48ae6f543f941a5be1084b45ed74b13&redirect_uri=http://localhost:3000/topSongs&scope=user-top-read&response_type=token";
        //window.location.href = "http://localhost:3000/";
      }
    const hashes = afterHash.split("&").map(hash => hash.split("="))//split hash string into property, value pairs
    setAccess_token(hashes[0][1]);
    console.log("set Access token to: " + access_token)
    console.log(window.location.pathname)
  }, [access_token])
  
  
  return (
    access_token ? (//if access_token exists then display app
      <Router basename="Spotify-Data">
        <div>
          <Navbar />
          <Switch>
            <Route path="/topSongs">
              <TopUserItems search="Tracks" accessToken={access_token}/>
            </Route>
            <Route path="/topArtists">
              <TopUserItems search="Artists" accessToken={access_token}/>
            </Route>
            <Route path="/reccomendations">
              <Reccomendations/>
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
