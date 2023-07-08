import React from 'react';

import './ChartBar.css';

export default function ChartBar(props){

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
       barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    //if we want to add multiple styling css properties dynamically in style attribute then we can do that
    // but we need to remember to follow the camel case convention with comma separated delimeter
    //like someting style={{height:100% , backgroundColor:'red'}}

    return (

        <div className='chart-bar'>
          <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
          </div>
          <div className='chart-bar__label'>{props.label}</div>
        </div>
    );



}