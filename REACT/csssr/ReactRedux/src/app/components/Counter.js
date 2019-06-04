import React from "react";

export const Counter = props => {
    return (
        <div className="counter">
            <b className="title">Счетчик</b>
            <div className="counter-display">{props.value}</div>
            <button className="button" onClick={props.onClick}>
                +
            </button>
        </div>
    );
};
