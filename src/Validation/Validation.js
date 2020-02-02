import React from 'react';

const validation = (props) => {
    let textValidation = 'Text too short'

    if (props.inputLength > 5) {
        textValidation = 'Text long enough'
    }
    
    return (
        <div>
            <p>The input's length is {props.inputLength}</p>
            <p>{textValidation}</p>
        </div>
    );
}

export default validation;
