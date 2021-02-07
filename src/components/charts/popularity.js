import { useRef, useEffect } from 'react'
import Chart from "chart.js";
import {popContainer} from './popularity.module.css'
Chart.defaults.global.defaultFontColor = "white";

function map(value, a, b, c, d){
    value = (value - a) / (b - a); // first map value from (a..b) to (0..1)
    return Math.round(c + value * (d - c)); // then map it from (0..1) to (c..d) and return it
}

export default function PopularityChart({data}){
    const canvasRef = useRef(null);
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
            <div className={popContainer}>
                <canvas ref={canvasRef}/>
            </div>
        </>
    )
} //end of PopularityChart