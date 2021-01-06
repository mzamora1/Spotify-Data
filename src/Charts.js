import React, { useRef, useEffect, useState } from 'react'
import Chart from "chart.js";
Chart.defaults.global.defaultFontColor = "white";

function map(value, a, b, c, d){
    value = (value - a) / (b - a); // first map value from (a..b) to (0..1)
    return Math.round(c + value * (d - c)); // then map it from (0..1) to (c..d) and return it
}

export function PopularityChart(props){
    const canvasRef = useRef(null);
    useEffect(() => {
        const popularityData = [], artistNames = [], colors = [];
        let lightness;
        props.data.forEach(artist => { //gather data on each item
            popularityData.push(artist.popularity);
            artistNames.push(artist.name);
            lightness = map(artist.popularity, 30, 95, 8, 70)
            colors.push(`hsl(143, 75%, ${lightness}%)`);
            //colors.push(`rgba(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256}, 0.7)`)
        });

        const chart = new Chart(canvasRef.current, {
            type: "horizontalBar",
            data: {
                datasets: [{
                    data: popularityData,
                    backgroundColor: colors,
                    barThickness: "flex"
                }],
                labels: artistNames 
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        });
        return () => chart.destroy();
    })

    return (
        <div className="canvasContainer">
            <canvas style={{padding: '0 10px', paddingBottom: '3em'}} ref={canvasRef}/>
        </div>
    )
}

Array.prototype.average = function(prop) {
    let total = 0
    for (let i = 0; i < this.length; i++) {
       if(typeof this[i] == 'object') total += this[i][prop]
       else throw new Error(`${this[i]} is not an object`);
    }
    return Math.round((total / this.length)*100);
}

export function RadarChart({data, accessToken}){ //tracks only
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const targetFeatures = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'];
    async function fetchData(url){
        try{
            const response = await fetch(url,{
                method: "GET",
                headers: {
                "Authorization": "Bearer " + accessToken,
                }
            })
            const json = await response.json()
            return json;
        }
        catch(error){
            console.error(error);
        }
    }
    
    async function averageData(){
        const audioFeatures = [], lables = [], averages = [];
        const url = "https://api.spotify.com/v1/audio-features/";
        for(let song of data){//gather audioFeatures from top songs
            let feature = await fetchData(url + song.id);
            if(feature) audioFeatures.push(feature);
        }
        for(let feature in audioFeatures[0]){
            if(targetFeatures.includes(feature)){
                lables.push(feature);
            }
        }
        for(let lable of lables){ //calc averages of those lables
            averages.push(audioFeatures.average(lable));
        }
        console.log(lables)
        console.log(averages);
        return {lables, averages}
        
    }
    function makeRadarChart(lables, dataPoints){
        let scaleColor = accessToken ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
        return new Chart(canvasRef.current, {
            type: 'radar',
            data: {
                labels: lables.map(lable => lable.toUpperCase()),
                datasets: [{
                    label: 'Your Music Taste',
                    backgroundColor: 'rgba(30, 215, 96, 0.5)',
                    data: dataPoints
                }]
            },
            options: {
                scale: {
                    pointLabels: {
                        fontColor: scaleColor
                    },
                    angleLines: {
                        color: scaleColor
                    },
                    gridLines: {
                        color: scaleColor
                    },
                    ticks: {
                        backdropColor: 'rgb(0, 0, 0)',
                        fontColor: 'rgb(255, 255, 255)'
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        })
    }
    
    useEffect(() => {
        setIsLoading(true);
        let chart;
        if(accessToken) {
            return averageData().then(({lables, averages}) => {
                chart = makeRadarChart(lables, averages);
                setIsLoading(false)
                return () => chart.destroy()
            });
        }
        else {
            const lables = Object.keys(data).filter(key => {
                if(targetFeatures.includes(key)) return key;
                return false;
            });
            const values = lables.map(lable => Math.round(data[lable]*100))
            chart = makeRadarChart(lables, values); 
        }
        setIsLoading(false);
        return () => chart.destroy()
    }, [])
    return (
        <div style={accessToken ? {width: '100vw', height: '50vh', marginTop: '10px'} : {position: 'absolute', top: '10%', width: '100%', height: '60%',background: 'rgba(255,255,255, 0.2)', backdropFilter: 'blur(30px)'}}>
            {isLoading && <div>...Loading</div>}
            <canvas style={accessToken ? {padding: '0 10px'} : {padding: '10px 10px'}} ref={canvasRef}/>
        </div>
    )
}