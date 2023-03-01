import React, { useState } from 'react';
import TodoApp from '/src/components/TodoApp.jsx';
import NightMode from '/src/components/NightMode';
import '/src/styles/App.css';

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  return (
    <div className={`div-app ${isNightMode ? 'night-mode' : ''}`}>
      <NightMode isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <TodoApp />
    </div>
  );
};

export default App;
/*
Ajout d'un mode Nuit:
Créer un nouvel état pour stocker l'état du mode nuit (ligne 7);
Utiliser le composant NightModeButton dans le composant App avec les props isNightMode et setIsNightMode (mise à jour de l'état).*/
