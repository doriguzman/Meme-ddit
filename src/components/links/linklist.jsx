import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import SingleLink from './singlelink';

class LinkList extends Component {
  componentDidMount() {
    this.props.getAllLinks();
  }

  render() {
    const { links } = this.props;

    const allList = links.allMemes.map((item) => {
      return (
        <Link to={`/links/${item.id}`}>
          <li id={item.id}>
            {item.title}
          </li>
        </Link>
      )
    });

    return (
      <div>
        <ul>
          {allList}
        </ul>
      </div>
    )
  }
}

export default LinkList;
