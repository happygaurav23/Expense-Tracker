import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';


export default function Chart(props){

    const dataPointsPerMonth = props.dataPointsPerMonth.map(eachMonthDataPoint => eachMonthDataPoint.value);
    const totalMaximum = Math.max(...dataPointsPerMonth);

    return <div className="chart">

        {props.dataPointsPerMonth.map(eachMonthDataPoint =>
          <ChartBar
            key={eachMonthDataPoint.label}
            value={eachMonthDataPoint.value} 
            maxValue={totalMaximum} 
            label={eachMonthDataPoint.label}
          />
        )}
    </div>

}