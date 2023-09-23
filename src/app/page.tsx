import React, { Component } from 'react';
import styles from './page.module.css';

/*class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      input: prevState.input + value,
    }));
  };

  handleCalculate = () => {
    try {
      this.setState((prevState) => ({
        input: eval(prevState.input).toString(),
      }));
    } catch (error) {
      this.setState({
        input: 'Error',
      });
    }
  };

  handleClear = () => {
    this.setState({
      input: '',
    });
  };

  render() {
    const { input } = this.state;
*/
export default function Home() {
    return (
      <div className="calculator">
        <div className="display">
          <input type="text"  readOnly />
        </div>
        <div className="buttons">
          <div className="column">
            <div className="row">
              <button >7</button>
              <button >8</button>
              <button >9</button>
              <button >4</button>
              <button >5</button>
              <button >6</button>
              <button >1</button>
              <button >2</button>
              <button >3</button>
              <button >0</button>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <button >+</button>
              <button >-</button>
              <button >*</button>
              <button >/</button>
              <button >%</button>
              <button >=</button>
              <button >C</button>
            </div>
          </div>
        </div>
      </div>
    )
}
    /* }
}

export default App;*/
