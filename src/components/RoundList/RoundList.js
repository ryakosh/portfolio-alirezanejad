import React from 'react';

import './styles/main.scss';

export default class RoundList extends React.Component {
  render() {
    return (
      <ul className="round-list">
        {this.props.children}
      </ul>
    );
  }
}