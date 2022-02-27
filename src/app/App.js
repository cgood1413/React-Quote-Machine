import './App.css';
import React, {Component} from 'react';
import {QuoteBox} from '../components/QuoteBox'
import {Quote} from '../components/Quote'
import {QuoteButton} from '../components/QuoteButton'
import {ReactComponent as TwitterLogo} from '../media/twitter-logo.svg';

const quotes  = [
  { quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse"},
  { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill"},
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
  { quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost"},
  { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale"},
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"},
  { quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", author: "Michael Jordan"},
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart"},
  { quote: "Every strike brings me closer to the next home run.", author: "Babe Ruth"},
  { quote: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone"},
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: quotes,
      currentQuote: {}
    };
    this.updateQuote = this.updateQuote.bind(this);
  }

  generateRandomQuote(){
    const quotes = this.state.quotes;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return this.state.currentQuote.quote !== randomQuote.quote ? randomQuote : this.generateRandomQuote();
  }

  updateQuote(){
    this.setState({currentQuote: this.generateRandomQuote()});
  }

  render(){
    const quote = this.state.currentQuote.quote;
    const author = this.state.currentQuote.author;
    return (
      <QuoteBox id="quote-box">
        <Quote id="text" text={quote} author={author} />
        <QuoteButton id="new-quote" handleClick={this.updateQuote} />
        <a title='Tweet this quote' id='tweet-quote' target="_blank" href={"https://twitter.com/intent/tweet?text=" + quote}>
          <TwitterLogo id='twitter-logo'/>
        </a>
      </QuoteBox>
    );
  }

  componentDidMount(){
    this.setState({currentQuote: this.generateRandomQuote()})
  }


}

export default App;
