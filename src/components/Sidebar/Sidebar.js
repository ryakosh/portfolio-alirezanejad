import React from 'react';

import './styles/main.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        {this.props.children}
      </div>
    );
  }
}