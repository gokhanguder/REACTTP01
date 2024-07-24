import React from 'react';

class MonBody extends React.Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec le temps et l'état de fonctionnement
    this.state = {
      time: 0,
      running: false
    };
    // Référence pour le timer
    this.timerRef = null;
  }

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.timerRef = setInterval(() => {
        this.setState(prevState => ({ time: prevState.time + 1 }));
      }, 1000);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.timerRef);
  };

  reset = () => {
    this.stop();
    this.setState({ time: 0 });
  };

  pause = () => {
    this.setState({ running: false });
    clearInterval(this.timerRef);
  };

  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.timerRef);
  }

  render() {
    return (
      <div>
        <h2>Chronomètre: {this.state.time}s</h2>
        <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Restart</button>
      </div>
    );
  }
}

export default MonBody;
