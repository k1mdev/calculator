import React from 'react';
import '../styles/Button.css';

export default function Button(props) {
    
    return (
        <div>
            <button className="buttonContainer" onClick={props.onClick}>
                <p>{props.value}</p>
            </button>
        </div>
    )
}
