import React from 'react';
import ClassNames from 'classnames';

import './styles/main.scss';

export default class Quoter extends React.Component {
  constructor(props) {
    super(props);

    this.WAIT_TIME = 3000; // Milliseconds
    this.state = { 
      show: false,
      quote: '',
    };
  }

  render() {
    return (
      <div className={ClassNames('quoter',
        {'quoter_show': this.state.show})}
      >
        {this.state.quote}
      </div>
    );
  }

  componentDidMount() {
    setTimeout(this.changeQuote, this.WAIT_TIME);
  }

  changeQuote() {
    new Promise((resolve) => {
      this.hideQuoter();
      this.wait(resolve);
    }).then(() => {
      this.showQuoter();
    });
  }

  showQuoter() {
    this.setState({ show: true });
  }

  hideQuoter() {
    this.setState({ show: false });
  }

  wait(resolve) {
    setTimeout(resolve, this.WAIT_TIME);
  }
}