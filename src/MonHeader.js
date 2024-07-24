import React from 'react';

class MonHeader extends React.Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec la date et l'heure actuelles
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    // Définir un intervalle pour mettre à jour la date et l'heure chaque seconde
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.timer);
  }

  tick() {
    // Mettre à jour l'état avec la nouvelle date et heure
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    return (
      <header>
        <h2>{date.toLocaleDateString('fr-FR')} {date.toLocaleTimeString('fr-FR')}</h2>
      </header>
    );
  }
}

export default MonHeader;