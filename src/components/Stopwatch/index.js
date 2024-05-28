// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.intervalId)
    console.log('component will unmount')
  }

  clickOnResetBtn = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  startTimer = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  clickOnStartBtn = () => {
    this.intervalId = setInterval(this.startTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  clickOnStopBtn = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
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
    console.log(this.timerStartsRunning())
    const {isTimerRunning} = this.state
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
              <p className="heading">Timer</p>
            </div>
            <h1 className="count-container">{this.timerStartsRunning()}</h1>
            <div className="action-buttons-container">
              <button
                type="button"
                className="button-styles start-btn"
                onClick={this.clickOnStartBtn}
                disabled={isTimerRunning}
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
