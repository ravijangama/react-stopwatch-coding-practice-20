// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  clickOnStartBtn = () => {
    this.intervalId = setInterval(this.startTimer, 1000)
  }

  startTimer = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  clickOnStopBtn = () => {
    clearInterval(this.intervalId)
  }

  clickOnResetBtn = () => {
    clearInterval(this.intervalId)
    this.setState({timeInSeconds: 0})
  }

  timerStartsRunning = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    console.log(this)
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
              <h1>{this.timerStartsRunning()}</h1>
            </div>
            <div className="action-buttons-container">
              <button
                type="button"
                className="button-styles start-btn"
                onClick={this.clickOnStartBtn}
              >
                Start
              </button>
              <button
                type="button"
                className="button-styles stop-btn"
                onClick={this.clickOnStopBtn}
              >
                Stop
              </button>
              <button
                type="button"
                className="button-styles reset-btn"
                onClick={this.clickOnResetBtn}
              >
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
