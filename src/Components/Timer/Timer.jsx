import React, {useState, useEffect} from 'react'

function getTime() {
    return new Date().toLocaleTimeString();
}

function Timer2() {
    // Constructor state setting
    const [time, setTime] = useState(getTime());
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // ComponentDidMount
        let intervalId = setInterval(() => {
            setTime(getTime());
            return () => {
                clearInterval(intervalId);
            }
        }, 100);
        setIntervalId(intervalId);
    }, [])

    // ComponentWillUnmount
    return (
        <div>{ time }</div>
    )
}

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        time: getTime(),
        intervalId: null,
    }
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
        this.setState({ time: getTime()});
    }, 100);
    this.setState({ intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
        <div>{this.state.time}</div>
    )
  }
}
