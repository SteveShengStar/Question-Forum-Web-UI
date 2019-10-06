import React from 'react';
import './QuestionItem.css';
import StatCardList from './StatCardList';
import QItemRightContainer from './QItemRightContainer';

class QuestionItem extends React.Component{
    render(){
        return <div style={{display: 'flex', 'padding': '15px 30px'}}>
            <div className="stat-card-container"><StatCardList upVotes={this.props.upVoteCount} answers={this.props.answerCount} views={this.props.viewCount} answered={this.props.answered}></StatCardList></div>
            <div className="qitem-right-container"><QItemRightContainer title={this.props.title} taglist={this.props.tags} userMeta={this.props.user} timestamp={this.props.timestamp}></QItemRightContainer></div>
        </div>
    }
}
export default QuestionItem;

/*
key={question.id} title={question.title} 
      upVoteCount={question.upVoteCount}
      answerCount={question.answerCount}
      viewCount={question.viewCount}
      tags={question.tags}
      timestamp={question.timestamp}
      user={question.user}
      answered={question.answered}
*/