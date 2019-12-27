import React from 'react';

const validation = (props) => {
    let textConfirmation = (
        <p>Text too short</p>
    );
    
    if (props.length >= 5) {
        textConfirmation = (
            <p>Text long ennough</p>
        );
    }
    
    return (
        <div>
            <p>The input's length is {props.length}</p>
            {textConfirmation}
        </div>
    );
}

export default validation;
