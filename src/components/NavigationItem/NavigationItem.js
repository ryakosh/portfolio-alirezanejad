import React from 'react';

import './styles/main.scss';

export default class NavigationItem extends React.Component {
  render() {
    return (
      <li class="navigation__item">
        <img src={this.props.src} />
      </li> 
    );
  }
}