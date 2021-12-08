import React from "react";
import axios from 'axios';

class PersonasForm extends React.Component{

    constructor( props ){
        super(props)
        this.state={}
    }
    
    submitNuevaPersona(event){
        event.preventDefault();
        //hacer la peticion via axios
        axios.post('http://localhost:5000/personas/',{

        nombre:this.refs.nombre.value,
        apellido:this.refs.apellido.value,
        edad:this.refs.edad.value,
        animal:this.refs.animal.value,
        cantante:this.refs.cantante.value

       
        
        }).then(respuesta => console.log(respuesta.data))
        .catch(error => console.log(error))
    }

    render(){
        return(
      
  <div className="center ">
      <h3 className="center #2196f3 blue">Nuevo Personaje</h3>
    <form className="col s12 " onSubmit={this.submitNuevaPersona.bind(this)}>
      <div className="row">
        <div className="input-field col s6">
          <input  id="nombre" ref="nombre" type="text"  />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field col s6">
          <input  id="apellido" ref="apellido" type="text"  />
          <label htmlFor="apellido">Apellido</label>
        </div>
        <div className="input-field col s6">
          <input  id="edad" ref="edad" type="number" placeholder="Estatura" />
          <label htmlFor="edad">Estatura</label>
        </div>
        <div className="input-field col s6">
          <input  id="animal" ref="animal" type="text" placeholder="Particularidad"/>
          <label htmlFor="animal">Particularidad</label>
        </div>
        <div className="input-field col s6">
          <input  id="cantante" ref="cantante" type="text" placeholder="Gustos"/>
          <label htmlFor="cantante">Gustos</label>
        </div>
        <div className="input-field col s12">          
            <button class="btn waves-effect waves-light #1e88e5 blue darken-1
" type="submit" name="action">
                Registrar
            </button>
        </div>
      </div>
    </form>
  </div>
        )
    }
}

export default PersonasForm