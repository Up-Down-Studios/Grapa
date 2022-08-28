/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './bugcard.css'

import priorityController from '../../Controllers/priorityController'

export default (props) => {
    const {name,priority,version} = props.bug;
    const {level,color} = priorityController(priority);

    function Clicked(){
        props.clicked(name);
        console.log("click event here!");
    }

    return(
        <div className="bugcard" onClick={Clicked} style={{color:color}}>
            <h2 className="name">{name}</h2>
            <h4 className="priority">{level}</h4>
            <h5 className="version">{version}</h5>
        </div>       
    )
}