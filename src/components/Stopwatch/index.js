// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  render() {
    const jsxElement = (
      <div className="stopwatch-bg-container">
        <div className="stopwatch-sub-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <h1>Timer</h1>
            </div>
            <div className="count-container">
              <h1>00:00</h1>
            </div>
            <div className="action-buttons-container">
              <button type="button" className="button-styles start-btn">
                Start
              </button>
              <button type="button" className="button-styles stop-btn">
                Stop
              </button>
              <button type="button" className="button-styles reset-btn">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Stopwatch
