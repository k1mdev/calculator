import React from 'react';
import '../styles/Output.css';

export default function Output(props) {
    return (
        <div className="outputContainer">
            <output className="output" placeholder="0">{props.total}</output>
        </div>
    )
}
