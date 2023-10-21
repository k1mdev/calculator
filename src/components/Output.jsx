import React from 'react';
import '../styles/Output.css';

export default function Output(props) {
    return (
        <div className="outputContainer">
            <output className="output">{props.total}</output>
        </div>
    )
}
