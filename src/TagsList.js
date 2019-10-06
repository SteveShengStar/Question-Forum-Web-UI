import React from 'react';
import './TagsList.css';
import Tag from './Tag';

class TagsList extends React.Component{
    render(){
        return (this.props.list.map(tag => <Tag text={tag}></Tag>));
    }
}
export default TagsList;
