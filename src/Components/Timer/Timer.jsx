import React, {useState, useEffect} from 'react';

function getTime() {
    return new Date().toLocaleTimeString();
}

function Timer2() {
    // Constructor state setting
    const [time, setTime] = useState(getTime());
    const [intervalId, setIntervalId] = useState(null);

    function didMount() {
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 100);
        setIntervalId(intervalId);
    }

    function willUnmount() {
        clearInterval(intervalId);
    }

    function administrateTimer () {
        didMount();
        return willUnmount
    }

    useEffect(administrateTimer, []);

    // ComponentWillUnmount
    return (
        <p>{ time }</p>
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
        <p>{this.state.time}</p>
    )
  }
}
