import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => Math.floor(Math.random() * 101)

  increase = () => {
    this.setState(prevState => ({count: prevState.count + this.randomNumber()}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-body">
        <div className="bg-container">
          <h1 className="counter-heading">Count {count}</h1>
          <p className="odd-even-text">
            Count is {count === 0 || count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button onClick={this.increase} type="button">
            Increment
          </button>
          <p className="instructions-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
