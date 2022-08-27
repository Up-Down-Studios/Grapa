/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './bugcard.css'

export default (props) => {
    function Clicked(){
        props.clicked(props.name);
    }

    return(
        <div className="bugcard" onClick={Clicked}>
            <h2 className="name">{props.name}</h2>
            <h4 className="priority">{props.priority}</h4>
            <h5 className="version">{props.version}</h5>

        </div>
    )
}