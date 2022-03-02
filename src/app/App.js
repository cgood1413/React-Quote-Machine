import './App.css';
import React, {Component} from 'react';
import {QuoteBox} from '../components/QuoteBox'
import {Quote} from '../components/Quote'
import {QuoteButton} from '../components/QuoteButton'
import {quotes} from '../features/quotes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: quotes,
      currentQuote: {}
    };
    this.handleQuoteButtonClick = this.handleQuoteButtonClick.bind(this);
  }

  generateRandomQuote(){
    const quotes = this.state.quotes;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return this.state.currentQuote.quote !== randomQuote.quote ? randomQuote : this.generateRandomQuote();
  }

  handleQuoteButtonClick(){
    this.setState({currentQuote: this.generateRandomQuote()})
    const svg = document.getElementById('backgroundSvg');
    let primary;
    let secondary;
    const colors = ['a63a50', '004736', '4B00BD', 'ffc757', '712836'];
    do {
      primary = colors[Math.floor(Math.random() * colors.length)];
      secondary = colors[Math.floor(Math.random() * colors.length)];
    } while (primary === secondary);
    const root = document.documentElement.style;
    root.setProperty('--primaryColor', '#' + primary)
    root.setProperty('--secondaryColor', '#' + secondary)
    console.log('test');
  }

  render(){
    const quote = this.state.currentQuote.quote;
    const author = this.state.currentQuote.author;
    return (
      <QuoteBox id="quote-box">
        <Quote id="text" text={quote} author={author} />
        <QuoteButton id="new-quote" handleClick={this.handleQuoteButtonClick} />
        <a title='Tweet this quote' id='tweet-quote' target="_blank" href={"https://twitter.com/intent/tweet?text=" + quote}>
          <i className="fa fa-twitter fa-3x"></i>
        </a>
      </QuoteBox>
    );
  }

  componentDidMount(){
    this.setState({currentQuote: this.generateRandomQuote()})
  }


}

export default App;
