import React from 'react';

const inputComponent = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} />
        </div>
    );
};

export default inputComponent;
