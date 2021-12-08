import React from "react";

const PersonasLista=(props)=>{
    return(
        <ul className="collection with-header">
        <li className="collection-header #1e88e5 blue darken-1 white-text #ffffff white"><h4>Persona</h4></li>
        {
            props.lista.map((elemento)=>{
                return(
                    <div>
                    <li className="collection-item" key={elemento._id} onClick={props.actualizarPersonaActual.bind(this,elemento)}>{elemento.nombre} {elemento.apellido}
                    <a href="#!" className="secondary-content " onClick={ props.borrarPersona.bind(this,elemento)}>
                    Eliminar</a>
                    </li>
                    
                    </div>
                    
                )
            })
        }       
      </ul>
    );
}

export default PersonasLista 