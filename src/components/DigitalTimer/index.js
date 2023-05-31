import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {deafaultValue: 25, status: false}

  render() {
    const {deafaultValue, status} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>

        <div className="timer-container">
          <div className="timer">
            <p className="time">{deafaultValue}</p>
            <br />
            <p className="timer-status">{status ? 'Running' : 'Paused'}</p>
          </div>
          <div className="button-container"></div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
