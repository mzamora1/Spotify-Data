import React, { Component } from 'react'
import Chart from "chart.js";
Chart.defaults.global.defaultFontColor = "white";
//let chart;
class PopularityChart extends Component {
    
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    createChart = () => {
        let items = this.props.data;
        items.sort((a, b) => { //sort by popularity
            if(a.popularity > b.popularity) return -1;
            else if(a.popularity < b.popularity) return 1;
            return 0;
        });
        let popularityData = [];
        let artistNames = [];
        let colors = [];
        let hue = 143;
        let lightness = 73;
        items.forEach(artist => { //gather data on each item
            popularityData.push(artist.popularity);
            artistNames.push(artist.name);
            colors.push(`hsl(${hue += 0}, 75%, ${lightness -= 3}%)`);
            //colors.push(`rgba(${Math.random()*256}, ${Math.random()*256}, ${Math.random()*256}, 0.7)`)
        });
        this.chart = new Chart(this.canvasRef.current, {
            type: "horizontalBar",
            data: {
                datasets: [{
                    data: popularityData,//artist popularity
                    backgroundColor: colors,
                    barThickness: "flex"
                }],
                labels: artistNames, //artist names
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            //fontSize: 7,
                            padding: 15
                        
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            //fontSize: 20
                        }
                    }]
                },
                title: {
                    display: false,
                    text: "Your Top Songs by Current Popularity",
                    fontSize: 50 
                },
                tooltips: {
                    //titleFontSize: 20
                }
            }
        });
    }
    
    componentDidMount(){
        this.createChart();
    }

    componentDidUpdate(){
        console.log("updated")
        this.chart.destroy();
        this.createChart();
    }
    
    render(){
        return (
            <div id="canvasContainer">
                <canvas id="canvas" ref={this.canvasRef}/>
            </div>
        )
    }
    
}



export default PopularityChart
