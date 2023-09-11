import React from 'react';
import '../styles/LargeButton.css';

export default function LargeButton(props) {
    return (
        <div className="lrgButtonContainer">
            <p>{props.value}</p>
        </div>
    )
}
