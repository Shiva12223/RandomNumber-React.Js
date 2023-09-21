// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randNumber: 0}

  RandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randNumber: randomNumber})
  }

  render() {
    const {randNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button type="button" className="btn" onClick={this.RandomNumber}>
              Generate
            </button>
          </div>
          <p className="countNumber">{randNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
