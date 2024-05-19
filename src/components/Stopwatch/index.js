import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsedInSecons: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsedInSecons: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  upDateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSecons: prevState.timeElapsedInSecons + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.upDateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSecons} = this.state
    const seconds = Math.floor(timeElapsedInSecons % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSecons} = this.state
    const minutes = Math.floor(timeElapsedInSecons / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopWatch"> Stopwatch </h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
