import React from 'react';
import moment from 'moment'
import './QuestionRightBannerMeta.css';

class QuestionRightBannerMeta extends React.Component{
    render(){
        return (<div class="q-meta-container" style={{display: 'flex'}}><div class="q-meta-item">{moment(this.props.timestamp).fromNow()}</div><div class="q-meta-item"><a href={this.props.profileUrl} >{this.props.userName}</a></div></div>);
    }
}
export default QuestionRightBannerMeta;