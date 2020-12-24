import React from 'react'
import List from "./List"
import {useFetch} from "./App"

function Reccomendations(props) {
    const ids = [];
    for(let i = 0; i < 5; i++){
        ids.push(props.songs.items[i].id)
    }
    const url = "https://api.spotify.com/v1/recommendations?seed_tracks="
    const reccomendations = useFetch(url + String(ids), {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + props.accessToken,
        }
    })
    
    if(!reccomendations) return <div className="loading">Loading...</div>
    return (
        <div style={{marginTop: "calc(80px + 1em)"}}>
            <h1 style={{margin: "1em 0"}}>Songs you might like</h1>
            <h3 style={{marginBottom: "1em"}}>Based on your top 5 songs</h3>
            <List data={reccomendations.tracks} search="Tracks" accessToken={props.accessToken}/>
        </div>
    )
}

export default Reccomendations
