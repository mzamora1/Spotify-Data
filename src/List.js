import React, {useState, useEffect} from 'react'
import {useFetch} from './fetch'
import { RadarChart } from './Charts';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    useEffect(() => {
       if(url) playing ? audio.play() : audio.pause();
    }, [playing]);
  
    useEffect(() => {
        if(url){
            audio.addEventListener('ended', () => setPlaying(false));
            return () => {
                audio.pause();
                audio.removeEventListener('ended', () => setPlaying(false));
            };
        }
    }, [audio]);
  
    return [playing, setPlaying];
};

export function SongListItem({song, rank, globalPlaying}){
    const {album, name, artists, preview_url} = song;
    const [playing, setPlaying] = useAudio(preview_url);
    const [isClicked , setIsClicked] = useState(false);
    useEffect(() => {
       setPlaying(false);
       setIsClicked(false);
    }, [globalPlaying])

    useEffect(() => {
        if(!globalPlaying && isClicked) setPlaying(true)
    }, [isClicked])
    return (
        <>
        {console.log(playing)}
        <div className="listItem"  onClick={() => setIsClicked(!isClicked)}>
            <div className={playing ? "flipCardInner rotateItem": "flipCardInner"}>
                <div className="flipCardFront">
                    <img src={album.images[0].url} width="100%" className="songImg" alt="album cover"/>
                    <div className="listInfo" style={playing ? {opacity: 0, transition: "opacity .3s ease-in"} : {transition: "opacity .3s ease-in"}}>
                        {preview_url && <i style={{marginLeft: "1em", fontSize: "clamp(20px, 3vw, 40px)"}} className={!playing ? "fas fa-play" : "fas fa-pause"} />}
                        <div style={{marginLeft: "1em", flexDirection: "column"}}>
                            <h1>{name}</h1>
                            <h2>By: {artists[0].name}</h2>
                            <h2>Album: {album.name}</h2>
                        </div>
                        <h1 className="rank">{rank && "#"+rank}</h1>
                    </div>
                </div>
                <div className="flipCardBack">
                    <img src={album.images[0].url} width="100%" className="songImg" alt="album cover"/>
                    <RadarChart data={song}/>
                </div>
            </div>
        </div>
        </>
    )
}

export function ArtistListItem({artist, rank}){
    const {name, popularity, images, id, followers, genres} = artist;
    const [isClicked, setIsClicked] = useState(false);
    const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;
    const relatedArtists = useFetch(url)
    if(!relatedArtists) return <div>Loading...</div>
    return (
        <>
        <div onClick={() => setIsClicked(!isClicked)} className="listItem">
            <div className={!isClicked ? "flipCardInner" : "flipCardInner rotateItem"}>
                <div className="flipCardFront">
                    
                    <img src={images[0].url}  width="100%" alt="artist"/>
                    <div className="listInfo" style={isClicked ? {opacity: 0, transition: "opacity .3s ease-in"} : {transition: "opacity .3s ease-in"}} >
                        <div style={{marginLeft: "1em", flexDirection: "column"}}>
                            <h1>{name}</h1>
                            <h2 style={{fontWeight: '500', textAlign: 'left'}}>More Info <i style={{color: "#1DB954"}} className="far fa-arrow-alt-circle-right"></i></h2>
                        </div>
                        <h1 className="rank">{rank && "#"+rank}</h1>
                    </div>

                </div>
                <div className="flipCardBack">

                    <img src={images[0].url}  width="100%" alt="artist"/>
                    <div className="backArtistInfo">
                        <h1 style={{fontWeight: '800'}}>{name}</h1>
                        <h2>Followers: {followers.total}</h2>
                        <h2>Popularity: {popularity} out of 100</h2>
                        <div className="tables" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <h2>Genres: 
                                <ul> 
                                    {genres.map((genre, index) => <li key={index}>{genre}</li>)} 
                                </ul>
                            </h2>
                            <h2 style={{whiteSpace:"nowrap", marginLeft: '5px'}}>Related Artists: 
                                <ul>
                                    {relatedArtists.artists.map((a, index) => index < 5 && <li key={index}>{a.name}</li>)}
                                </ul>
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>  
        </>
    )
}