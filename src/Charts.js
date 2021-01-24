import React, { useRef, useEffect, useState } from 'react'
import Chart from "chart.js";
import { useFetch } from './fetch';
Chart.defaults.global.defaultFontColor = "white";

function map(value, a, b, c, d){
    value = (value - a) / (b - a); // first map value from (a..b) to (0..1)
    return Math.round(c + value * (d - c)); // then map it from (0..1) to (c..d) and return it
}

export function PopularityChart({data}){
    const canvasRef = useRef(null);
    const basicPercent = (data.reduce((total, cur) => total + cur.popularity, 0) / data.length).toFixed(2);
    useEffect(() => {
        const popularityData = [], artistNames = [], colors = [];
        const maxPopularity = data.reduce(( max, cur ) => Math.max( max, cur.popularity), 0);
        const minPopularity = data.reduce(( min, cur ) => Math.min( min, cur.popularity), 100);
        data.forEach(item => { //gather data on each item
            popularityData.push(item.popularity);
            artistNames.push(item.name);
            const lightness = map(item.popularity, minPopularity, maxPopularity, 15, 70)
            colors.push(`hsl(143, 75%, ${lightness}%)`);
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
    }, [data])

    return (
        <>
            <div className="canvasContainer">
                <canvas style={{padding: '0 10px', paddingBottom: '3em'}} ref={canvasRef}/>
            </div>
            <div className="basicMeter">
                <h2>Damn, {basicPercent}% Basic</h2>
            </div>
        </>
    )
} //end of PopularityChart


export function RadarChart({data}){ //audio features only
    const canvasRef = useRef(null);
    const targetFeatures = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'];

    function makeRadarChart(lables, dataPoints, minPoints, maxPoints){
        const scaleColor = Array.isArray(data) ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
        const dataSets = [{
            label: 'Average',
            backgroundColor: `hsla(143, 75%, 50%, 0.5)`,
            data: dataPoints
        }];
        if(minPoints) dataSets.push({
            label: 'Minimun',
            backgroundColor: `hsla(143, 75%, 80%, 0.5)`,
            data: minPoints,
        });
        if(maxPoints) dataSets.push({
            label: 'Maximun',
            backgroundColor: `hsla(143, 75%, 15%, 0.5)`,
            data: maxPoints,
        });
        const chart = new Chart(canvasRef.current, {
            type: 'radar',
            data: {
                labels: lables.map(lable => lable.toUpperCase()),
                datasets: dataSets
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
                    display: Array.isArray(data)
                }
            }
        })
        return () => chart.destroy();
    }
    
    useEffect(() => {
        if(Array.isArray(data)) {
            const lables = Object.keys(data[0]).filter(key => targetFeatures.includes(key));
            const averages = lables.map(lable => Math.round(data.reduce((total, current) => total + current[lable], 0) / data.length * 100));
            const mins = lables.map(lable => Math.round(Math.min(...data.map(song => song[lable]))*100));
            const maxs = lables.map(lable => Math.round(Math.max(...data.map(song => song[lable]))*100));
            return makeRadarChart(lables, averages, mins, maxs)
        }
        else if(data.constructor === Object){
            const lables = Object.keys(data).filter(key => targetFeatures.includes(key));
            const values = lables.map(lable => Math.round(data[lable]*100))
            return makeRadarChart(lables, values);
        }
    }, [data])
    
    return (
        <div style={Array.isArray(data) ? {width: '100vw', height: '50vh', marginTop: '10px'} : {position: 'absolute', top: '10%', width: '100%', height: '60%',backgroundColor: 'rgba(255,255,255, 0.2)', backdropFilter: 'blur(300px)', zIndex: 0}}>
            {/* {(!response || (Array.isArray(response) && response.length == 0)) && <div>...Loading</div>} */}
            <canvas style={Array.isArray(data) ? {padding: '0 10px'} : {padding: '10px 10px'}} ref={canvasRef}/>
        </div>
    )
} //end of RadarChart