import React, { useState } from "react";
import axios from 'axios';


const PersonasDetalle=(props)=>{

    return(
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              
            </div>
            <div className="card-content">
            
            <span className="card-title card-panel collection-header #00bcd4 cyan">
                {props.personita.nombre} {props.personita.apellido}</span>
              <p>Estatura: {props.personita.edad}</p>
              <p>Particularidad: {props.personita.animal}</p>
              <p>Gustos: {props.personita.cantante}</p>
            </div>
            <div className="card-action ">
             
            </div>
          </div>
        </div>
      </div>
    )
}

export default PersonasDetalle