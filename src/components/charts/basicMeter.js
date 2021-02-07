import {basicMeter} from './basicMeter.module.css';

export default function BasicMeter({data}){
    const basicPercent = (data.reduce((total, cur) => total + cur.popularity, 0) / data.length).toFixed(2);
    return (
        <h2 className={basicMeter}>Damn, {basicPercent}% Basic</h2>
    )
}