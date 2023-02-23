import React from 'react';
//import 'styles/Check.scss';

const Check = () => {
    return (
        <div>
            <ul className="flex flex-col">
                <li className="flex items-left">
                <input type="checkbox" id="item1" className="mr-2" />
                <label htmlFor="item1" className="text-gray-700">Learn React</label>
                </li>
                <li className="flex items-left">
                <input type="checkbox" id="item2" className="mr-2" />
                <label htmlFor="item2" className="text-gray-700">Be awesome</label>
                </li> 
            </ul>
        </div>

    );
};

export default Check;