import React from 'react';

const char = (props) => {
    return (
        <li className="rgdt2-Char_ListItem" onClick={props.click}>
            <p>{props.char}</p>
        </li>
    )
}

export default char;