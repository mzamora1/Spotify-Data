
import React from 'react'

export default function List(props){
    console.log(props)
    console.log("render list")
    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '1em 0'}}>Your Top {props.data.length} {props.search} In Order</h1>
            {props.search === "Tracks" && props.data.map((data, index) => <SongListItem song={data} key={index} index={index}/>)}
            {props.search === "Artists" &&  props.data.map((data, index) => <ArtistListItem artist={data} key={index} index={index}/>)}
        </div>
    )
}


function SongListItem(props){
    const {album, name, artists} = props.song;
    return (
        <>
        <div className="ListItem" >
            <img src={album.images[0].url} width="100%" className="songImg" alt="album cover"/>
            <div className="songInfo">
                <div style={{marginLeft: "1em", flexDirection: "column"}}>
                    <h1>{name}</h1>
                    <h2>By: {artists[0].name}</h2>
                    <h2>Album: {album.name}</h2>
                </div>
                <h1 style={{marginLeft:"auto", marginRight: "1em", fontSize: "xxx-large"}}>#{props.index+1}</h1>
            </div>
        </div>
        </>
    )
}

function ArtistListItem(props){
    const {name, popularity, images, id, followers} = props.artist;
    return (
        <>
        <div className="ListItem">
            <img src={images[0].url}  width="100%" className="artistImg" alt="artist image"/>
            <div className="artistInfo" >
                <div style={{marginLeft: "1em", flexDirection: "column"}}>
                    <h1>{name}</h1>
                    <h2>Followers: {followers.total}</h2>
                </div>
                <h1 style={{marginLeft:"auto", marginRight: "1em", fontSize: "xxx-large"}}>#{props.index+1}</h1>
            </div>
        </div>  
        </>
    )
}