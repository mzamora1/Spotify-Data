import PopularityChart from '../components/charts/popularity'
import BasicMeter from '../components/charts/basicMeter'
import ArtistListItem from '../components/lists/artist'

export default function TopArtists({artists}){
    return (
        <section>
            <h1 >Your Top {artists.items.length} Artists Ranked By Popularity</h1>
            <PopularityChart data={artists.items}/>
            <BasicMeter data={artists.items}/>
            <h1 style={{margin: '1em 0'}}>Your Top {artists.items.length} Artists In Order</h1>
            {artists.items.map((data, index) => <ArtistListItem artist={data} key={data.id} rank={index+1}/>)}
        </section>
    )
}