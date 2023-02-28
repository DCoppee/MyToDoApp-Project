import React, { useRef } from 'react';
import '/src/styles/New.scss';

const New = ({ onAddTodo }) => {
  const inputRef = useRef();

  const clickHandler = () => {
    const inputElement = inputRef.current;

    onAddTodo(inputElement.value);
    inputElement.value = '';
  };

  return (
    <div className='div-new'>
      <label className='label-new'>I have to </label>
      <input className='input-new' ref={inputRef} placeholder='New task' type="text"  />
      <button  className='btn-new' onClick={clickHandler}>Add</button>
    </div>
  );
};

export default New;

/*Utiliser le hook "useRef" pour faire référence à un élément DOM (ici, la valeur de l'input)
!Ne pas utiliser document.getElementById() ou document.querySelector() avec React!
Appeler le hook et l'assigner à la variable "inputRef".
Dans l'élément "input", ajouter la propriété "ref" avec comme valeur la ref ainsi créée.
Dans la fonction clickHandler, stocker la valeur actuelle de inputRef grâce à sa propriété .current.
Enfin, ajouter la fonction onAddTodo pour ajouter un nouvel élément à la liste de tâches.*/