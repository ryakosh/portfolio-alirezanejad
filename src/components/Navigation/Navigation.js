import React from 'react';

import './styles/main.scss';

export default class Navigation extends React.Component {
  render() {
    return (
      <ul class="navigation">
        {this.props.children}
      </ul>
    );
  }
}