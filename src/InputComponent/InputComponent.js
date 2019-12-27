import React from 'react';

const inputComponent = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.currentValue} />
        </div>
    );
};

export default inputComponent;
