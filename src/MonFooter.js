import React from 'react';

class MonFooter extends React.Component {
  render() {
    const { nom, prenom, session } = this.props;

    return (
      <div>
        <p>Nom : {nom}</p>
        <p>Prénom : {prenom}</p>
        <p>Session : {session}</p>
      </div>
    );
  }
}

export default MonFooter;