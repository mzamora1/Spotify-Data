import {useState} from 'react'
import {useFetch} from '../hooks/useFetch'
import styles from './artist.module.css'

export default function ArtistListItem({artist, rank}){
    const {name, popularity, images, id, followers, genres} = artist;
    const [isClicked, setIsClicked] = useState(false);
    const relatedArtists = useFetch(`https://api.spotify.com/v1/artists/${id}/related-artists`)

    return (
        <>
        <div onClick={() => setIsClicked(!isClicked)} className={styles.flipCard}>
            <div className={!isClicked ? styles.flipCardInner : `${styles.flipCardInner} ${styles.rotate}`}>
                <div className={styles.flipCardFront}>
                    
                    <img src={images[0].url}  width="100%" alt="artist"/>
                    <div className={styles.artistInfo} style={isClicked ? {opacity: 0, transition: "opacity .3s ease-in"} : {transition: "opacity .3s ease-in"}} >
                        <div style={{marginLeft: "1em", flexDirection: "column"}}>
                            <h1>{name}</h1>
                            <h2 style={{fontWeight: '500', textAlign: 'left'}}>More Info <i style={{color: "#1DB954"}} className="far fa-arrow-alt-circle-right"></i></h2>
                        </div>
                        <h1 className={styles.rank}>{rank && "#"+rank}</h1>
                    </div>

                </div>
                <div className={styles.flipCardBack}>

                    <img src={images[0].url}  width="100%" alt="artist"/>
                    <div className={styles.backArtistInfo}>
                        <h1 style={{fontWeight: '800'}}>{name}</h1>
                        <h2>Followers: {followers.total}</h2>
                        <h2>Popularity: {popularity} out of 100</h2>
                        <div className={styles.tables}>
                            <h2>Genres: 
                                <ul> 
                                    {genres.map((genre, index) => <li key={index}>{genre}</li>)} 
                                </ul>
                            </h2>
                            <h2 style={{whiteSpace:"nowrap", marginLeft: '5px'}}>Related Artists: 
                                <ul>
                                    {relatedArtists ? relatedArtists.artists.map((a, index) => index < 5 && <li key={index}>{a.name}</li> ) : <div>Loading...</div>}
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