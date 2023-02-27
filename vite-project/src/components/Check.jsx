import React from 'react';
import '/src/styles/Check.scss';

const Check = () => {
    return (
        <ul className='div-check'>
            <li className='div-item'>
                 <input type="checkbox" /> First task
            </li>
            <li>
                <input type="checkbox" /> Second task
            </li>
        </ul>
    );
};

export default Check;