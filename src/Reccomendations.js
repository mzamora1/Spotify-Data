import React, {useEffect, useState} from 'react'
import List from "./List"

const useFetch = (url, options) => {
    console.log("used fetch")
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return { response, error };
};

function Reccomendations(props) {//need ids
    // const ids = []//props.songs.items.map((song, index) => index < 5 ? song.id : undefined);
    // for(let i = 0; i < 1; i++){
    //     ids.push(props.songs.items[i].id)
    // }
    // console.log(String(ids))
    // const url = "https://api.spotify.com/v1/recommendations?seed_tracks="
    // const {reponse, error} = useFetch(url + String(ids), {
    //     method: "GET",
    //     headers: {
    //     "Authorization": "Bearer " + props.accessToken,
    //     }
    // })
    const [reccomendations, setReccomendations] = useState(null);

    useEffect(() => {
        const ids = [];
        for(let i = 0; i < 5; i++){
            ids.push(props.songs.items[i].id)
        }
        const url = "https://api.spotify.com/v1/recommendations?seed_tracks=" + String(ids);
        fetch(url, {
            method: "GET",
            headers: {
            "Authorization": "Bearer " + props.accessToken,
            }
        })
        .then(response => response.json())
        .then(json => setReccomendations(json));
    }, [props.songs.items])
    if(!reccomendations) return <div>Loading...</div>
    return (
        <div style={{textAlign: 'center', color: "#fff", marginTop: "calc(80px + 1em)"}}>
            {/* {console.log(reccomendations)} */}
            <h1 style={{margin: "1em 0"}}>Songs you might like</h1>
            <h3 style={{margin: "0 0 1em 0"}}>Based on your top 5 songs</h3>
            <List data={reccomendations.tracks} search="Tracks" accessToken={props.accessToken}/>
        </div>
    )
}

export default Reccomendations
