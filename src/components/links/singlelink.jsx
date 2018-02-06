import React, { Component } from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import AddComment from '../comments/addComment'



class SingleLink extends Component {
  componentDidMount() {
    this.props.getSingleLink(this.props.id);
  }

  render() {
    const { links, comments, addComment } = this.props;
    const singleLink = links.oneMeme 
    // single Link holds the array that holds on object 
    // [{ id: , url: }]
    console.log(singleLink.url)
    return (
      <div>
        <h3>{links.oneMeme.title}</h3>
        <a href={links.oneMeme.url} target="_blank">
          <p>
            Go to Site
          </p>
        </a>
     

        <AddComment comments= {comments} addComment= {addComment} singleLink = {singleLink}/> 
        
      </div>
    );
  }
}

export default SingleLink;
