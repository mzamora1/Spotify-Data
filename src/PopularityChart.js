import React, { useRef, useEffect } from 'react'
import Chart from "chart.js";
Chart.defaults.global.defaultFontColor = "white";

export default function PopularityChart(props){
    const canvasRef = useRef(null);
    useEffect(() => {
        let popularityData = [], artistNames = [], colors = [];
        let lightness = 73;
        props.data.forEach(artist => { //gather data on each item
            popularityData.push(artist.popularity);
            artistNames.push(artist.name);
            colors.push(`hsl(143, 75%, ${lightness -= 3.25}%)`);
            //colors.push(`rgba(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256}, 0.7)`)
        });

        const chart = new Chart(canvasRef.current, {
            type: "horizontalBar",
            data: {
                datasets: [{
                    data: popularityData,//artist popularity
                    backgroundColor: colors,
                    barThickness: "flex"
                }],
                labels: artistNames //artist names
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
        <div id="canvasContainer">
            <canvas id="canvas" ref={canvasRef}/>
        </div>
    )
}
