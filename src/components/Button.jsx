import React from 'react';
import '../styles/Button.css';

export default function Button(props) {
    return (
        <div className="buttonContainer">
            <p>{props.value}</p>
        </div>
    )
}
