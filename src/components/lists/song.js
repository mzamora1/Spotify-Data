import {useState, useEffect} from 'react'
import useAudio from '../hooks/useAudio'
import RadarChart from '../charts/radar'
import styles from './song.module.css'

export default function SongList({songs, audioFeatures, ranked}){
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <div onClick={() => setIsPlaying(!isPlaying)}>
            {songs.map((song, i) => <SongListItem song={song} key={song.id} globalPlaying={isPlaying} audioFeature={audioFeatures[i]} rank={ranked && i+1}/>)}
        </div>
    )
}


function SongListItem({song, rank, globalPlaying, audioFeature}){
    const {album, name, artists, preview_url} = song;
    const [playing, setPlaying] = useAudio(preview_url);
    const [isClicked , setIsClicked] = useState(false);

    const handleClick = () => setIsClicked(!isClicked)
    useEffect(() => {
       setPlaying(false);
       setIsClicked(false);
    }, [globalPlaying])
    
    useEffect(() => {
        if(!globalPlaying && isClicked) setPlaying(true)
    }, [isClicked])

    return (
        <div onClick={handleClick} className={styles.item} style={{backgroundImage: `url(${album.images[0].url})`}}>
            <div className={playing ? `${styles.slider} ${styles.open}` : styles.slider}>
                <RadarChart data={audioFeature}/>
            </div>
            <div className={styles.info}>
                {preview_url && <i style={{marginLeft: "1em", fontSize: "clamp(20px, 3vw, 40px)"}} className={!playing ? "fas fa-play" : "fas fa-pause"} />}
                <div>
                    <h1>{name}</h1>
                    <h2>By: {artists[0].name}</h2>
                    <h2>Album: {album.name}</h2>
                </div>
                <h1 className={styles.rank}>{rank && "#"+rank}</h1>
            </div>
        </div>
    )
}