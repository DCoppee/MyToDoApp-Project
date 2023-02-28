import React, { useState } from 'react';
import '/src/styles/Check.scss';

const Check = () => {
    const initialTodos = [
      ["First task", false],
      ["Second task", false]
    ];
    const [todos, setTodos] = useState(initialTodos);

    //Fonction pour modifier l'état du tableau
    const handleToggle = (index) => {
      const newTodos = [...todos];
      newTodos[index][1] = !newTodos[index][1];
      setTodos(newTodos);
    };

    return (
      <ul className='div-check'>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo[1]}
            onChange={() => handleToggle(index)}
          />
          {todo[0]}
        </li>
      ))}
    </ul>
    );
};

export default Check;

/*D'abord, générer un array pour structurer les données: "const initialTodos = ["First task", "Second task"]"
(destiné à être modifié lors de la gestion de l'état).
Ensuite, le parcourir avec la méthode .map.

Ajouter un hook "useState" Ajout d'un hook pour gérer l'état du composant.

Ensuite, "const [todos, setTodos] = useState(...);" = "destructuring assignment", raccourcis pour trois étapes:
"useState" renvoie deux valeurs dans un tableau: const myState = useState(...);
La 1ere valeur est tjs l'état actuel (la liste de tâches actuelles): const todos = myState[0];
La 2e valeur est tjs une fonction qui permet d'actualiser l'état actuel: const setTodos = myState[1];
Par convention, "set" pour nommer la 2e valeur.

"useState(initialTodos)": le paramètre "initialTodos" représente l'état lors du 1er chargement.
Attention: ne pas oublier de fournir une clé unique pour chaque élément de la liste,
en utilisant l'index de l'élément dans le tableau: {todos.map((todo, index) => (<li key={index}>.

Pour configurer l'état du composant afin que les checkboxes soient définies comme cochées ou décochées:
utiliser un tableau de tableaux pour stocker les tâches et leur état (coché ou non coché)

La fonction "handleToggle" modifie l'état du tableau lorsqu'une case à cocher est cochée ou décochée. 
Cette fonction crée une copie du tableau pour ne pas modifier directement l'état du composant, 
puis elle inverse la valeur de la propriété "done" pour l'objet de tâche correspondant à l'index donné. 
Enfin, la fonction utilise la méthode "setTodos" pour mettre à jour l'état du composant avec la nouvelle copie du tableau.

Dans le rendu de la liste, la valeur de la propriété "done" est utilisée pour déterminer si une case à cocher doit être cochée ou non,
Ajouter également un gestionnaire d'événements "onChange" pour chaque case à cocher qui appelle la fonction "handleToggle" avec l'index correspondant de la tâche.*/