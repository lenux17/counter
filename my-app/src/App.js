import React from 'react';
import './App.css';

function decimalToHexString(number) {
  if (number < 0) {
    number = 0xffffffff + number + 1;
  }

  return `#${number.toString(16).toUpperCase()}`;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <p
          style={{
            color: decimalToHexString(this.state.counter),
          }}
        >
          {this.state.counter}
        </p>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 50 });
          }}
        >
          +50
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 50 });
          }}
        >
          -50
        </button>
      </div>
    );
  }
}

export default App;
