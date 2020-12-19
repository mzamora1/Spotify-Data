import React, {useState, useEffect, Component} from 'react';
import PopularityChart from "./PopularityChart";
import List from "./List"
import { render } from '@testing-library/react';

class TopUserItems extends Component { //takes search category and accessToken as props
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            error: null
        }
    }
    
    songData(s){
        return {
            name: s.name,
            popularity: s.popularity,
            album: s.album,
            id: s.id,
            artists: s.artists,
            preview: s.preview_url,
        }
    }

    artistData(a){
        return {
            name: a.name,
            popularity: a.popularity,
            images: a.images,
            id: a.id,
            followers: a.followers,
        }
    }

    componentDidMount() {
        this.componentWillReceiveProps(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.search.toLowerCase())
        this.setState({isLoaded: false});
        fetch(`https://api.spotify.com/v1/me/top/${nextProps.search.toLowerCase()}?time_range=short_term`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + nextProps.accessToken,
            }
        })
        .then(response => response.json())
        .then(
            (result) => {
                //console.log(result["items"])
                if(nextProps.search === "Tracks" && result.items) this.setState({...this.state, items: result.items.map(this.songData)});
                if(nextProps.search === "Artists"  && result.items) this.setState({items: result.items.map(this.artistData)});
                this.setState({isLoaded: true});
            },
            (error) => {
                this.setState({isLoaded: true});
                this.setState({error: error});
            }
        );
    }

    render(){
        console.log("render user items")
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            const {items} = this.state;
            const {search} = this.props;
            return (
                <>
                    <h1 style={{textAlign: 'center', marginTop: "calc(80px + 1em)"}}>Your Top 20 {search} Ranked By Popularity</h1>
                    <PopularityChart data={items}/>
                    <List data={items} search={search}/>
                    {console.log(items)}
                </>
                
            )
        }
    }
    
}

export default TopUserItems
