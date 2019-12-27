import React from 'react';

const inputComponent = (props) => {
    return (
        <div>
            <input type="text" value={props.content} />
        </div>
    );
};

export default inputComponent;
