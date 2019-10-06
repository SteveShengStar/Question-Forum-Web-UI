import React from 'react';
import './QItemRightContainer.css';
import TagsList from './TagsList';
import QuestionTitle from './QuestionTitle';
import QuestionRightBannerMeta from './QuestionRightBannerMeta';

class QItemRightContainer extends React.Component{
    render() {
        return (<div style={{'flex-basis': "100%"}}>
            <div style={{'margin-bottom': '9px'}}><QuestionTitle text={this.props.title}></QuestionTitle></div>
            {this.props.tagList}
            <div><TagsList list={this.props.taglist}></TagsList></div>
            <div><QuestionRightBannerMeta userName={this.props.userMeta.userName} profileUrl={this.props.userMeta.userProfileLink} timestamp={this.props.timestamp}></QuestionRightBannerMeta></div>
        </div>);
    }
}
export default QItemRightContainer;

/*
 title={this.props.title} taglist={this.props.tags} userMeta={this.props.user}
*/

/*
import moment from 'moment';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
};

export default Time;
*/