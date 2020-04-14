import React from 'react';
import './App.css';
import DisplaySimsonQuote from './components/DisplaySimsonQuote';
import axios from 'axios';

const sampleSimsonQuote = [
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simsonQuote: sampleSimsonQuote
    };
    this.getSimsonQuote = this.getSimsonQuote.bind(this);
  }

  getSimsonQuote () {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simsonQuote: data,
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplaySimsonQuote simsonQuote={this.state.simsonQuote} />
        <button type="button" onClick={this.getSimsonQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
