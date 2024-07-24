import React from 'react';
import MonHeader from './MonHeader';
import MonBody from './MonBody';
import MonFooter from './MonFooter';

function App() {
  const nom = "GUDER";
  const prenom = "Gokhan";
  const session = "DIGI2024-M05";

  return (
    <div>
      <MonHeader />
      <MonBody />
      <MonFooter nom={nom} prenom={prenom} session={session} />
    </div>
  );
}
export default App;