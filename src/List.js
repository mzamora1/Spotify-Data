
import React, {useState, useEffect} from 'react'

export default function List(props){
    console.log("render list")
    return (
        <div className="itemList">
            {props.search === "Tracks" && props.data.map((data, index) => <SongListItem song={data} key={index} index={index}/>)}
            {props.search === "Artists" &&  props.data.map((data, index) => <ArtistListItem artist={data} key={index} index={index} accessToken={props.accessToken}/>)}
        </div>
    )
}
const useAudio = url => {
    if(url){

    }
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
       if(url) playing ? audio.play() : audio.pause();
    }, [playing]);
  
    useEffect(() => {
        if(url){
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }
    }, [audio]);
  
    return [playing, toggle];
};

const useFetch = (url, options) => {
    
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

function SongListItem(props){
    const {album, name, artists, preview_url} = props.song;
    console.log(props.song);
    const [playing, toggle] = useAudio(preview_url);
    return (
        <>
        <div className="ListItem"  onClick={toggle}>
            <img src={album.images[0].url} width="100%" className="songImg" alt="album cover"/>
            
            <div className="songInfo">
                {preview_url ? <i style={{margin: "0 15px", fontSize: "clamp(20px, 3vw, 40px)"}} className={!playing ? "fas fa-play" : "fas fa-pause"} /> : null}
                <div style={{marginLeft: "1em", flexDirection: "column"}}>
                    <h1 style={{fontSize: "clamp(20px, 5vw, 40px)"}}>{name}</h1>
                    <h2 style={{fontSize: "clamp(15px, 3vw, 30px)"}}>By: {artists[0].name}</h2>
                    <h2 style={{fontSize: "clamp(15px, 3vw, 30px)"}}>Album: {album.name}</h2>
                </div>
                <h1 style={{marginLeft:"auto", marginRight: "15px", fontSize: "xxx-large"}}>#{props.index+1}</h1>
            </div>
        </div>
        </>
    )
}

function ArtistListItem(props){
    const {name, popularity, images, id, followers, genres} = props.artist;
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    const url = `https://api.spotify.com/v1/artists/${id}/related-artists`
    const {response, error} = useFetch(url, {
        method: "GET",
        headers: {
        "Authorization": "Bearer " + props.accessToken,
        }
    })
    if(!response) return <div>Loading...</div>
    else if(error) return <div>Error: {error.message}</div>
    return (
        <>
        <div onClick={handleClick} className="ListItem" style={{perspective: "1000px"}}>
            <div className={!isClicked ? "flipCardInner" : "flipCardInner rotateItem"}>
                <div className="flipCardFront">
                    <img src={images[0].url}  width="100%" className="artistImg" alt="artist image"/>
                    <div className="artistInfo" >
                        <div style={{marginLeft: "1em", flexDirection: "column"}}>
                            <h1>{name}</h1>
                            <h2>More Info <i style={{color: "#1DB954"}} className="far fa-arrow-alt-circle-right"></i></h2>
                        </div>
                        <h1 style={{marginLeft:"auto", marginRight: "1em", fontSize: "xxx-large"}}>#{props.index+1}</h1>
                    </div>
                </div>
                <div className="flipCardBack">
                <img src={images[0].url}  width="100%" className="artistImg" alt="artist image"/>
                    <div className="backArtistInfo">
                        <h1 style={{fontSize: "3em"}}>{name}</h1>
                        <h2>Followers: {followers.total}</h2>
                        <h2>Popularity: {popularity} out of 100</h2>
                        <h2>Genres: <span> {genres.map((genre, index) => index !== genres.length-1 ? `${genre}, ` :  genre)} </span></h2>
                        <h2>Related Artists: 
                            <ul style={{listStyle: 'inside', textAlign: 'left', marginLeft: "25%", marginTop: "0px"}}>
                                {response.artists.map((artist, index) => index < 5 ? <li key={index}>{artist.name}</li> : null)}
                            </ul>
                        </h2>
                    </div>
                    
                </div>
            </div>
        </div>  
        </>
    )
}