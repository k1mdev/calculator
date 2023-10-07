import React from 'react';
import '../styles/LargeButton.css';

export default function Output(props) {
    return (
        <div className="outputContainer">
            <p>{props.total}</p>
        </div>
    )
}
