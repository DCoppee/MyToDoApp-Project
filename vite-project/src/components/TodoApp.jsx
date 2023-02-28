import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Top from './Top.jsx';
import New from './New.jsx';
import Check from './Check.jsx';
import '/src/styles/TodoApp.css';

const LSKEY = "MyTodoApp";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + ".todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, {id: uuidv4(), newTodo, completed: false}]);
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);
  
  return (
    <div className='todoapp-div'>
        <Top />
        <New onAddTodo={handleAddTodo} />
        <Check todos={todos} onToggle={setTodos} />
    </div>
  );
};

export default TodoApp;

/*Déplacer ici (composant parent) l'état "todos" et la fonction "handleAddTodo" (avec useState)
et les transmettre en tant que props aux composants enfants "New" et "Check".
Définir une clé unique pour l'app avec LSKEY.
Ajouter le hook useEffect.
Récupérer les données et les stocker dans l'état todos au moment de l'initialisation de l'application:
utiliser JSON.parse() pour convertir les données JSON stockées dans le localStorage en tableau JavaScript. 
Si aucune donnée n'est trouvée dans le localStorage, initialTodos s'initialise avec un tableau vide [].
Dans handleAddTodo(), simple mise à jour de l'état todos.
Enfin, ajouter une fonction useEffect() pour stocker UNE COPIE des données todos dans le localStorage
chaque fois que l'état todos est mis à jour.
*/