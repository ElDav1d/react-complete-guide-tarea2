import React from 'react';

const char = (props) => {
    return (
        <li className="rgdt2-Char_ListItem" onClick={props.click}>
            <p>{props.character}</p>
        </li>
    )
}

export default char;