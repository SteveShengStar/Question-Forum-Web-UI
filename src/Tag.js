import React from 'react';
import "./Tag.css";

class Tag extends React.Component{
    render(){
        return (<div class="q-tag">{this.props.text}</div>);
    }
}
export default Tag;