import React from 'react';

const validation = (props) => {
    let textValidation = 'Text too short'

    if (props.length > 5) {
        textValidation = 'Text long enough'
    }
    
    return (
        <div>
            <p>The input's length is {props.length}</p>
            <p>{textValidation}</p>
        </div>
    );
}

export default validation;
