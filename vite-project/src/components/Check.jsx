import React from 'react';
import '/src/styles/Check.scss';

const Check = () => {
    return (
        <div className='div-check'>
            <div className='div-item'>
                <input type="checkbox" id="item1"/>
                <label htmlFor="item1">Learn React</label>
            </div>
            <div className='div-item'>
                <input type="checkbox" id="item2"/>
                <label htmlFor="item2">Be awesome</label>
            </div>
        </div>

    );
};

export default Check;