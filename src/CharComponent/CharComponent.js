import React from 'react';

const charComponent = (props) => {
    return (
        <li className="rgdt2-CharComponent_ListItem" onClick={props.click}>
            <p>{props.char}</p>
        </li>
    )
}

export default charComponent;