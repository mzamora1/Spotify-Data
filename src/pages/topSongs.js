import PopularityChart from '../components/charts/popularity'
import RadarChart from '../components/charts/radar'
import BasicMeter from '../components/charts/basicMeter'
import SongList from '../components/lists/song'

export default function TopSongs({songs, audioFeatures}){
    return (
        <section>
            <h1 >Your Top {songs.items.length} Tracks Ranked By Popularity</h1>
            <PopularityChart data={songs.items}/>
            <BasicMeter data={songs.items}/>
            <h1 >Your Music Taste</h1>
            <RadarChart data={audioFeatures.audio_features}/>
            <h1 style={{margin: '1em 0'}}>Your Top {songs.items.length} Songs In Order</h1>
            <SongList songs={songs.items} audioFeatures={audioFeatures.audio_features} ranked={true}/>
        </section>
    )
}