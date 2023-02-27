import React from 'react';
import '/src/styles/New.scss';

const New = () => {
    return (
        <div className='div-new'>
            <label className='label-new'>I have to </label>
            <input className='input-new' placeholder='New task'></input>
            <button className='btn-new'>Submit</button> 
        </div>
    );
};

export default New;