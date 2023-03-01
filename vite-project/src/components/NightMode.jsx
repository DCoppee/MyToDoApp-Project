import React from 'react';
import '/src/styles/NightMode.css';

const NightMode = ({ isNightMode, setIsNightMode }) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isNightMode} onChange={() => setIsNightMode(!isNightMode)} />
            <span className="slider round"></span>
        </label>
    );
};

export default NightMode;

/* Composant "toggle" intégré au composant App: 
utilise un input de type checkbox pour activer ou désactiver le mode nuit. 
L'état "isNightMode" est utilisé pour déterminer si la case à cocher doit être cochée ou non, 
et "setIsNightMode" est utilisé pour mettre à jour l'état du mode nuit lorsqu'un utilisateur clique sur la case à cocher. 
Le label entoure l'input pour qu'un clic sur le texte déclenche également le changement d'état.*/