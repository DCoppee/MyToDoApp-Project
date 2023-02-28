import React, { useState } from 'react';
import Top from './Top.jsx';
import New from './New.jsx';
import Check from './Check.jsx';
import '/src/styles/TodoApp.css';

const TodoApp = () => {
  const initialTodos = [
    ["First task", false],
    ["Second task", false]
  ];
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, [newTodo, false]]);
  };

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
et les transmettre en tant que props aux composants enfants "New" et "Check".*/