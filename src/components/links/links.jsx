import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';
import NewLink from './newLink'

const Links = ({ links, getAllLinks, getSingleLink, addNewLink , addComment, comments }) => {
  const renderLinkList = () => {
    return (
      <LinkList links={links} getAllLinks={getAllLinks} />
    )
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    return (
      <SingleLink links={links}  getSingleLink={getSingleLink} id={id} addComment={addComment} comments={comments} />
    )
  }

  const renderNewLink = ()=>{
    return (<NewLink addNewLink={addNewLink}/>)
  }


  return (
    <div>
      <Switch>
      <Route exact path='/links' render={renderLinkList} />
      <Route exact path='/links/new' render= {renderNewLink}/>
      <Route  path='/links/:id' render={renderSingleLink} />
     
      </Switch> 
    </div>
  )
}

export default Links;
