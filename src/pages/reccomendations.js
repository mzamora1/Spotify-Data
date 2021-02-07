import SongList from '../components/lists/song'

export default function Reccomendations({reccomendations, audioFeatures}){
    return (
        <section>
            <h1 style={{margin: "1em 0"}}>Songs you might like</h1>
            <h3 style={{marginBottom: "1em"}}>Based on your top 5 songs</h3>
            <SongList songs={reccomendations.tracks} audioFeatures={audioFeatures.audio_features}/>
        </section>
    )
}