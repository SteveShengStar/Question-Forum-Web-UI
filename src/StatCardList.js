import React from 'react';
import './StatCardList.css';
import StatCard from './StatCard';

const labels = ['votes', 'answers', 'views']

class StatCardList extends React.Component{
    render() {
        return <div style={{display: 'flex'}} className="stat-card-list">
            <div><StatCard label={labels[0]} value={this.props.upVotes}></StatCard></div>
            <div><StatCard label={labels[1]} value={this.props.answers} answered={this.props.answered}></StatCard></div>
            <div><StatCard label={labels[2]} value={this.props.views}></StatCard></div>
        </div>;
    }
}
export default StatCardList;
