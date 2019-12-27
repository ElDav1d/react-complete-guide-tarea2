import React from 'react';

const validationComponent = (props) => {
    let textConfirmation = (
        <p>Text too short</p>
    );
    
    if (props.length >= 5) {
        textConfirmation = (
            <p>Tex long ennough</p>
        );
    }
    
    return (
        <div>
            <p>The input's length is {props.length}</p>
            {textConfirmation}
        </div>
    );
}

export default validationComponent;
