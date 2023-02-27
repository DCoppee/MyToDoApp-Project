import React from 'react';
import Top from './Top.jsx';
import New from './New.jsx';
import Check from './Check.jsx';
import '/src/styles/TodoApp.css';

const TodoApp = () => {
    return (
        <div className='todoapp-div'>
            <Top /><New /><Check />
        </div>
    );
};

export default TodoApp;