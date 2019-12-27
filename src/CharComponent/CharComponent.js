import React from 'react';

import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className="rgdt2-CharComponent_Container">
            <p>{props.char}</p>
        </div>
    )
}

export default charComponent;