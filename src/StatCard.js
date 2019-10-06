import React from 'react';
import './StatCard.css';

function formatNum(num){
    if (num >= 1000000){
        return `${Math.round( (num / 1000000) * 10 ) / 10}M`;
    }else if (num >= 1000){
        return `${Math.round( (num / 1000) * 10 ) / 10}k`;
    }else{
        return num;
    }
}
class StatCard extends React.Component{
    render (){
        return <div className={`stat-card ${(this.props.answered) ? 'success-bg' : ''}`}>
            <div style={{'font-size': '22px', 'margin-bottom': '7px'}}>{formatNum(this.props.value)}</div>
            <div style={{'font-size': '10px', 'font-weight': '600'}}>{this.props.label}</div>
        </div>
    }
}
export default StatCard;