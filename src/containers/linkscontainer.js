import React, { Component } from 'react';
import { connect } from 'react-redux';
import Links from '../components/links/links'

class LinksContainer extends React.Component {
  getAllLinks = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ALL" });
  };

  getSingleLink = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_ONE", id: id });
  }

  addNewLink = (obj)=>{
    const { dispatch } = this.props;
    dispatch({type: "ADD_ONE", obj:obj})

  }

  addComment = (obj) => {
    const { dispatch } = this.props;
    dispatch({ type: "ADD_COMMENTS",  obj:obj });
  }

  render() {
    const { links , comments} = this.props;

    return (
      <Links
        links={links}
        getAllLinks={this.getAllLinks}
        getSingleLink={this.getSingleLink}
        addNewLink= {this.addNewLink}
        addComment={this.addComment}
        comments= {comments}


      />
    );
  }
}

export default connect(state => state)(LinksContainer);
