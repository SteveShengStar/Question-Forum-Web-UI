import React from 'react';
import './QuestionTitle.css';

class QuestionTitle extends React.Component{
    render(){
        return (<div className='qtitle'>{this.props.text}</div>);
    }
}
export default QuestionTitle;