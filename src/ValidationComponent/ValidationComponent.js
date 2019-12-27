import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            <p>The input's length is {props.length}</p>
            { props.length < 5 ?
                <div>
                    <p>Text too short</p>
                </div>
            : null }
            { props.length >= 5 ?
                <div>
                    <p>Text long ennough</p>
                </div>
            : null }
        </div>
    );
}

export default validationComponent;
