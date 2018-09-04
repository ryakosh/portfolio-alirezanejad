import React from 'react';

import './styles/main.scss';

export default class RoundListItem extends React.Component {
  render() {
    return (
      <li className="round-list__item">
        {this.props.children}
      </li>
    );
  }
}