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
    this.changeQuote();
  }

  changeQuote() {
    new Promise((resolve) => {
      this.hideQuoter();
      this.wait(resolve);
    }).then(() => {
      this.showQuoter();
      this.wait(() => {
        this.changeQuote();
      });
    });
  }

  genRandQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  showQuoter() {
    this.setState((prevState, props) => ({
      show: true,
      quote: this.genRandQuote(props.quotes),
    }));
  }

  hideQuoter() {
    this.setState({ show: false });
  }

  wait(resolve) {
    setTimeout(resolve, this.WAIT_TIME);
  }
}